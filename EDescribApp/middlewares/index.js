import {validationResult} from 'express-validator/check';
import {isAuth as isValidToken} from '../shared/';


function valid(authorization,_role,next){
    let token=authorization.split(' ')[1];
    
    let {isValid,role}=isValidToken(token);
    
    if(isValid && _role===role) return next();
    else next(new Error('token is invalid'));
}

export  function validator(req,res,next){    
    const errors=validationResult(req);
    return errors.isEmpty()? next():next(errors.array());
}

export function isAuth(role){
    return function(req,res,next){
        console.log(`ROLEEEE ->> ${role}`);
        valid(req.headers.authorization,role,next);

    }
    // let token=req.headers.authorization.split(' ')[1];
    // if(isValidToken(token)) return next();
    // console.log(token);
}


