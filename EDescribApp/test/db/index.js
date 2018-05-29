import mongoose from 'mongoose';
import {URI,MONGO_CONFIG} from '../../config';


module.exports={
    mongoose,
    connect:()=>{
  
        mongoose.Promise=global.Promise;
        mongoose.connect(URI,MONGO_CONFIG);
    },
    disconnect:done=>{
        mongoose.disconnect(done);
    }
}