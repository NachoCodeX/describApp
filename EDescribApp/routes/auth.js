import authController from '../controllers/auth';
import {check} from 'express-validator/check';
import {validator,isAuth} from '../middlewares/';


module.exports=Router=>{
    const signUpChecks=[
        check('email').isEmail(),
        check('password').isLength({min:8}).exists(),
        check('firstName').exists().custom((value,{req})=>value.length>0),
        check('age').exists().custom((value,{req})=>value>=18),
        check('rfc').exists().custom((value,{req})=>value.length>0),
        check('gender').exists(),
        check('nationality').exists(),
        check('maritalStatus').exists(),
        check('address').exists(),
        check('contact').exists(),
        check('lastName').exists().custom((value,{req})=>value.length>0),
        check('confirmPassword').exists().custom((value,{req})=>value===req.body.password),
        
    
    ]


    Router.post('/signup',isAuth('TEST'),signUpChecks,validator,authController.signUp);
    Router.post('/signin',authController.signIn);
    return Router;

}