import mongoose from 'mongoose';
const Schema= mongoose.Schema;


const vehicleSchema=new Schema({
    _id:false,
    vechicleType:{type:String,enum:['Auto','Camión'],default:'Auto'},
    model:{type:String,required:true},
    doorsCount:{type:Number,required:true,default:4},
    cylinderCount:{type:Number,required:true},
    transmission:{type:String,enum:['Estándar','Automático']},
    isElectric:{type:Boolean,default:false,required:true},
    isEquipped:{type:Boolean,required:true,default:false},
    hasAir:{type:Boolean,default:false},
    noSerie:{type:String,required:true},
    noEngine:{type:String,required:true},
    plate:{type:String,required:true},


});

export default vehicleSchema;