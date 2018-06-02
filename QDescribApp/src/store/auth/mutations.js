import {LOGIN} from './mutation-types';

export default {
    [LOGIN.SUCCESS](state,{user,token}){
        console.log("MUTATION");
        localStorage.setItem('token',token);
        state.user=user;

        
    },
    [LOGIN.ERROR](state){

    }


}