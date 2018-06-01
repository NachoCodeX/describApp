import User from '../models/user';
import { generateToken } from '../shared';

export function authenticate({email,password}){
    return User.findOne({email})
    .exec()
    .then(user=>{
        if(!user) Promise.reject(new Error(`The email doesn't exist.`))
        else if(!user.comparePassword(password)) Promise.reject(new Error('The password is incorrect.'))
        return {user,token:generateToken(user._id)};
    });

}