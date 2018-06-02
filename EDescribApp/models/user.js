import BaseUser from './baseUser';
import {Schema} from 'mongoose';
import vehicleSchema from './vehicle';



const driverSchema=new Schema({
    _id:false,
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,enum:['Masculino','Femenino']},
});



const userSchema=new Schema({

    rfc:{type:String,required:true},
    nationality:{type:String,enum:['Mexicana','Extranjera']},
    maritalStatus:{type:String,enum:['Soltero','Divorciado','Viudo','Casado','Unión Libre']},
    address:{
        state:{type:String,required:true},
        municipality:{type:String,required:true},
        street:{
            name:{type:String,required:true},
            noExt:{type:Number},
            noInt:{type:String}
        },
        col:{type:String,required:true},
        postalCode:{type:Number,required:true}
    },
    contact:{
        mobile:{type:String,required:true},
        phone:String
    },
    drivers:{
        0:driverSchema,
        1:driverSchema
    },
    policy:{type:Schema.ObjectId,ref:"Policy"},
    vehicle:vehicleSchema

},{discriminatorKey:'role'});

const User = BaseUser.discriminator('USER',userSchema);

export default User;




    