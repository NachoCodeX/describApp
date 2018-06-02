import $axios from 'axios';
import {LOGIN} from './mutation-types';
import {Notify} from 'quasar';
const BASE_URL='http://localhost:8000/describapp/auth';


export const logout=({commit},{$router})=>{
    localStorage.removeItem('token');
    $router.push('/');
}

export const signin =async  ({commit},{email,password,$router,$socket}) => {
    try {
        //Response
        console.log($socket);
        
        const {user,token} = await $axios.post(`${BASE_URL}/signin`,{email,password}).then(res=>res.data)
        console.log(user);
        $socket.emit('login',user._id);
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

