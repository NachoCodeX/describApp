import User from '../models/user';


export function findUsersByAjustador(_id){
    return User.find({ajustador:_id})
    .select('-password')
    .exec().then(res=>res);
}