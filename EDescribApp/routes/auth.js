import authController from '../controllers/auth';
import { EPROTO } from 'constants';

console.log(authController);


module.exports=Router=>{

    Router.post('/signup',authController.signUp);


    return Router;

}