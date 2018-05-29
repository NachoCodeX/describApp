import authController from '../controllers/auth';
import {check} from 'express-validator/check';
import {validator} from '../middlewares/';

console.log(authController);


module.exports=Router=>{
    const signUpChecks=[
        check('email').isEmail(),
        check('password').isLength({min:8}).exists(),
        check('firstName').exists().custom((value,{req})=>value.length>0),
        check('lastName').exists().custom((value,{req})=>value.length>0),
        check('confirmPassword').exists().custom((value,{req})=>value===req.body.password),
    ]



    Router.post('/signup',signUpChecks,validator,authController.signUp);
    Router.post('/signin',authController.signIn);
    return Router;

}