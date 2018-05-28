import authController from '../controllers/auth';

console.log(authController);


module.exports=Router=>{

    Router.post('/signup',authController.signUp);


    return Router;

}