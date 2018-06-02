import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const policySchema=new Schema({
    previousID:{type:String},
    expiration:{type:Date,required:true},
    created_at:{type:Date,default:Date.now},
    paymentMethod:{type:Number,enum:[1,2,3,4],default:4},
    isRenewal:{type:Boolean,default:false},
});


export default mongoose.model('Policy',policySchema);