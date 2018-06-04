import User from '../models/baseUser';
import Accident from '../models/accident';

export function createAccident(user,ajustador){
    const accident=new Accident({
        user,ajustador
    });

    return accident.save().then(res=>res);
}




export function updateSocketID(socketID){
    return User.findOne({socketID},{$set:{socketID:socketID}})
        .exec()
        .then(res=>res);
}

export function setSocketID(_id,socketID){
    return User.findByIdAndUpdate({_id},{socketID})
    .exec().then(res=>res);
}

export function getSocketID(_id){
    return User.findById({_id})
    .select('socketID')
    .exec()
    .then(res=>res.socketID);   
}


export function removeSocketID(_id){{
    return User.findByIdAndUpdate({_id},{$set:{socketID:null}})
               .exec().then(res=>res);
}}