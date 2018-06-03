import mongoose from 'mongoose';
const Schema=mongoose.Schema;
const SchemaTypes=Schema.Types;



const accidentSchema=new Schema({
    lat:{type:String},
    lng:{type:String},
    user:{type:Schema.ObjectId,ref:'User'},
    created_at:{type:Date,default:Date.now},
    ajustador:{type:Schema.ObjectId,ref:'User'},
    finished_at:{type:Date,default:Date.now}
});

accidentSchema.pre('save',next=>{
    next();    
});

export default mongoose.model('Accident',accidentSchema);