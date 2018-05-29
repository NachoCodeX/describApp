import {validationResult} from 'express-validator/check';
import {isAuth as isValidToken} from '../shared/';


export  function validator(req,res,next){
    const errors=validationResult(req);
    return errors.isEmpty()? next():next(errors.array());
}

export function isAuth(req,res,next){
    let token=req.headers.authorization.split(' ')[1];
    if(isValidToken(token)){
        next();
    }else{
        next(new Error('token is invalid'));
    }
    // console.log(token);
}

