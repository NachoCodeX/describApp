import User from '../models/user';
import { generateToken } from '../shared';

export function authenticate({email,password}){
    return User.findOne({email})
    .exec()
    .then(user=>{
        if(!user) return Promise.reject({message:`The email doesn't exist.`,code:401})
        else if(!user.comparePassword(password)) return Promise.reject({message:'The password is incorrect.',code:401})
        return {user,token:generateToken(user._id)};
    });

}