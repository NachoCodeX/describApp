import {updateSocketID,setSocketID,removeSocketID, getSocketID, createAccident} from './helpers';

export default io=>{
    
    io.on('connection',async socket=>{
        console.log(`SocketID -> ${socket.id}`);

     
        socket.on('login',async _id=>{
            console.log(`LOGIN -> ${_id}`);

            // console.log(`LOGIN -> ${_id}`);
            //console.log(data);
                        
            try {
                await setSocketID(_id,socket.id)
            } catch (error) {
                console.log(`ERRROR!`); 
                console.log(error);
                
            }
        });
        
        socket.on('logout',async _id=>await removeSocketID(_id));
        
        socket.on('alert',async ({user,ajustador,position})=>{
            console.log(user);
            
            try {
                const ASID=await getSocketID(ajustador._id);
                if(ASID){
                    console.log(`ENVIAR -> ${ASID}`);
                    socket.broadcast.to(ASID).emit('testing',{user,position});
                }
                await createAccident(user,ajustador);
                
            } catch (error) {
                
            }
        });



 

    });
}
