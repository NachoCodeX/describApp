import $axios from 'axios';
const BASE_URL='http://192.168.1.72:8000/describapp/api';


export function getUser({commit},_id){
    const URL = `${BASE_URL}/users/${_id}`;
    return $axios.get(URL).then(res=>res.data);        
}


export function getUsers({commit},_id){
    
    const URL = `${BASE_URL}/ajustador/${_id}/users`
    return $axios.get(URL).then(res=>res.data);
}


export function sendAlert({commit},{$socket,data}){
    console.log("ALERT!");
    
    $socket.emit('alert',data);
}




