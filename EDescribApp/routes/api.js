import {getUsers,createAccident} from '../controllers/api';


module.exports=Router=>{
    
    Router.get('/ajustador/:_id/users',getUsers);
    Router.post('/accidents',createAccident);


    return Router;
}