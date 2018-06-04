import {getUser,getUsers,createAccident} from '../controllers/api';


module.exports=Router=>{
    Router.get('/users/:_id',getUser);
    Router.get('/ajustador/:_id/users',getUsers);
    Router.post('/accidents',createAccident);


    return Router;
}