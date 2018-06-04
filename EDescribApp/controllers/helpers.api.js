import User from '../models/baseUser';

export function findUserByID(_id){
    return User.findById({_id})
    .select('-password')
    .exec()
    .then(res=>res);
}



export function findUsersByAjustador(_id){
    console.log(_id);
    
    return User.find({ajustador:_id})
    .select('-password')
    .exec().then(res=>res);
}