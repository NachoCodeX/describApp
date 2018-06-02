import jwt from 'jwt-simple';
import moment from 'moment';

export function isAuth(token){
    
    try {
        let payload=jwt.decode(token,'motynacho');
        if(payload.exp <= moment().unix()){
            return {isValid:false};
        }
        return {isValid:true,role:payload.role};
    } catch (error) {
        return {isValid:false};
    }
}