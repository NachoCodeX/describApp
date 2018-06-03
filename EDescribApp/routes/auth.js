import authController from '../controllers/auth';
import {check} from 'express-validator/check';
import {validator,isAuth} from '../middlewares/';


module.exports=Router=>{
    const signUpChecks=[
        check('user.email').isEmail(),
        check('user.password').isLength({min:8}).exists(),
        check('user.firstName').exists().custom((value,{req})=>value.length>0),
        check('user.age').exists().custom((value,{req})=>value>=18),
        check('user.rfc').exists().custom((value,{req})=>value.length>0),
        check('user.gender').exists(),
        check('user.nationality').exists(),
        check('user.maritalStatus').exists(),
        check('user.address').exists(),
        check('user.contact').exists(),
        check('user.lastName').exists().custom((value,{req})=>value.length>0),
        check('user.confirmPassword').exists().custom((value,{req})=>value===req.body.user.password),
        
    
    ]


    Router.post('/signup',/*isAuth('TEST')*/signUpChecks,validator,authController.signUp);
    Router.post('/signin',authController.signIn);
    return Router;

}