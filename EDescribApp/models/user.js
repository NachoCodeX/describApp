import mongoose, { mongo } from 'mongoose';
const Schema=mongoose.Schema;

const userSchema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{
        type:String,required:true,unique:true,
        match:/^\S+@\S+\.\S{3}$/
    },
    password:{type:String,required:true}
});





export default mongoose.model('User',userSchema);