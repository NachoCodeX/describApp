import User from '../models/baseUser';

export function setSocketID(_id,socketID){
    return User.findByIdAndUpdate({_id},{socketID})
    .exec().then(res=>res);
}

export function removeSocketID(_id){{
    return User.findByIdAndUpdate({_id},{$set:{socketID:null}})
               .exec().then(res=>res);
}}