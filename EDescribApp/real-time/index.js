export default io=>{
    
    io.on('connection',socket=>{
        console.log(`SocketID -> ${socket.id}`);

    });
}
