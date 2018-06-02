import $axios from 'axios';
import {LOGIN} from './mutation-types';
import {Notify} from 'quasar';
const BASE_URL='http://localhost:8000/describapp/auth';


export const signin =async  ({commit},{email,password,$router}) => {
    try {
        //Response
        const {user,token} = await $axios.post(`${BASE_URL}/signin`,{email,password}).then(res=>res.data)
        console.log(user);
                
        commit(LOGIN.SUCCESS,{user,token})
        //Router 
        $router.push('/dashboard');
        
    } catch ({response}) {
        console.log(error);
        
        //Notify
            Notify.create({
                message:response.data,
                position:'top-right',
                type:'warning'
            });
        
    }
    

}

