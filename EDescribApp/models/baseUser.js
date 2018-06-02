import mongoose, { mongo } from 'mongoose';
import {hashSync,genSaltSync,compareSync} from 'bcrypt';
import {SALT_FACTOR} from '../config';
const Schema=mongoose.Schema;
const options={discriminatorKey:'role'}




const userSchema=new Schema({
    email:{
        type:String,required:true,unique:true,
        match:/^\S+@\S+\.\S{3}$/
    },
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,enum:['Masculino','Femenino']},
    socketID:{type:String}
    
},options);

userSchema.virtual('fullname').get(function(){
    return `${this.firstName} ${this.lastName}`;
});


userSchema.methods.comparePassword=function(password){
    return compareSync(password,this.password);
};
userSchema.methods.userExists=function(){    
    return this.model('User').find({email:this.email}).exec().then(response=>response);
}






function hashPassword(user){
    const resultPromise=new Promise((resolve,reject)=>{
        const SALT=genSaltSync(SALT_FACTOR);
        return resolve(hashSync(user.password,SALT));
    });
    return resultPromise;
}





userSchema.pre('save',async function(next){
    
    try { 
        let user=this,
        isExists=await user.userExists(), 
        errorMessage=new Error(`${user.email} is already in use`);
        
        if(user.isNew && isExists.length>0) return next(errorMessage);
        else if(user.isModified('password')){
                console.log(`NEW USER`);   
                user.password=await hashPassword(user);
                return next();//explicit
        }

    } catch (error) {
        console.log(error);
        
        console.log("ERROR!");
        
    }
});

export default mongoose.model('User',userSchema);;







