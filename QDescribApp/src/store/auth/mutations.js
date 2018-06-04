import {LOGIN, LOGOUT} from './mutation-types';

export default {
    [LOGIN.SUCCESS](state,{accidents,user,token}){
        console.log("MUTATION");
        console.log(accidents);
        
        localStorage.setItem('token',token);
        state.user={...user,accidents};

    },
    [LOGIN.ERROR](state){

    },
    [LOGOUT.SUCCESS](state){
        
        state={}
    }

}