
export function sendAlert({commit},{$socket,data}){
    $socket.emit('alert',data);
}




