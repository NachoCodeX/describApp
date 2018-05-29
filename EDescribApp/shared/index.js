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


export function generateToken(sub){
    const payload={
        sub,
        iat:moment().unix(),
        exp:moment().add(1,'days').unix()
    }
    return jwt.encode(payload,SECRET_TOKEN);

};



export function isAuth(token){
    try {
        let payload=jwt.decode(token,SECRET_TOKEN);
        if(payload.exp <= moment().unix()){
            return false;
        }
        return true;            
    } catch (error) {
        return false;
    }
}
