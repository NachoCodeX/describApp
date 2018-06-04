import $axios from 'axios';
import {LOGIN,LOGOUT} from './mutation-types';
import {Notify} from 'quasar';
// const BASE_URL='http://localhost:8000/describapp/auth';
const BASE_URL='http://192.168.1.72:8000/describapp/auth';


export const logout=({commit},{$router,$socket,_id})=>{
    localStorage.removeItem('token');
    commit(LOGOUT.SUCCESS)
    $socket.emit('logout',_id)
    $router.push('/');
}

export const signin =async  ({commit},{email,password,$router,$socket}) => {
    try {
        //Response
        
        const {accidents,user,token} = await $axios.post(`${BASE_URL}/signin`,{email,password}).then(res=>res.data)
        const {_id}=user;
        console.log("ACCIDES");
        
        console.log(accidents);
        
        $socket.emit('login',_id);
        commit(LOGIN.SUCCESS,{accidents,user,token})

        //Router 
        $router.push('/dashboard');
        
    } catch (error) {
        console.log(error);
        
            Notify
                Notify.create({
                    message:error.response.data,
                    position:'top-right',
                    type:'warning'
                });
        
    }
    

}

