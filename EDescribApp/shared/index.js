import moment from 'moment';
import jwt from 'jwt-simple';
import {SECRET_TOKEN} from '../config';


export function decodeToken(token){
    const decode=new Promise((resolve,reject)=>{
        try {
            const payload=jwt.decode(token,SECRET_TOKEN);
            if(payload.exp <= moment().unix()){
                return reject({status:401,text:'Token has expired'});
            }

            return resolve(payload.sub);;

        } catch (error) {
            return reject({status:500,text:'Token is invalid'});
        }
    });

    return decode;
};


export function generateToken(sub,role){
    const payload={
        sub,
        role,
        iat:moment().unix(),
        exp:moment().add(1,'days').unix()
    }
    return jwt.encode(payload,SECRET_TOKEN);

};



export function isAuth(token){
    
    try {
        let payload=jwt.decode(token,SECRET_TOKEN);
        if(payload.exp <= moment().unix()){
            return {isValid:false};
        }
        return {isValid:true,role:payload.role};
    } catch (error) {
        return {isValid:false};
    }
}
