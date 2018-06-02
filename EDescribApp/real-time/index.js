import {setSocketID} from './helpers';

export default io=>{
    
    io.on('connection',socket=>{
        console.log(`SocketID -> ${socket.id}`);
        
     
        socket.on('login',async _id=>{
            console.log(`LOGIN -> ${_id}`);
            
            try {
                await setSocketID(_id,socket.id)
            } catch (error) {
                console.log(`ERRROR!`); 
                console.log(error);
                
            }
        });

    });
}
