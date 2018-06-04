import User from '../models/baseUser';
import Accidents from '../models/accident';
import { generateToken } from '../shared';

function getAccidentByID(ajustador){
    return Accidents.find({ajustador})
    .exec().then(res=>res);
}


export function authenticate(email,password){
    console.log(`EMAIL : ${email}`);
    return User.findOne({email})
    .populate('ajustador','_id socketID')
    .exec()
    .then(async user=>{
        if(!user) return Promise.reject({message:`The email doesn't exist.`,code:401})
        else if(!user.comparePassword(password)) return Promise.reject({message:'The password is not incorrect.',code:401})
        const accidents=user.role==='AJUSTADOR'? await getAccidentByID(user._id):[];
        delete user._doc.password
        return {accidents,user,token:generateToken(user._id,user.role)};
    });

}