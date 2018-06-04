import mongoose from 'mongoose';
mongoose.Promise=global.Promise;

import {waterfall} from 'async';
import {URI,PORT,MONGO_CONFIG} from './config';

import app from './app';
import io from './real-time/' ;
import fs from 'fs';

 const server = require('http').Server(app);
// const server = require('https').createServer({
//     key:fs.readFileSync('key.pem'),
//     cert:fs.readFileSync('cer.pem'),
//     passphrase:'12345678'
// },app);

io(require('socket.io')(server));



const tasks=[
    done=>{
        //MONGO CONNECTION
        mongoose.connect(URI,MONGO_CONFIG)
        .then(()=>{
            console.log("MONGODB WORKS.");
            done();
        })
        .catch(e=>done(e,null));
    },
    done=>{
        //EXPRESS SERVER
        server.listen(PORT,'0.0.0.0',e=>{
            if(e) return done(e);
            console.log(`Server on port ${PORT}`);
            done();
        });
    }
]

const resultCallback=(e,result)=>{
    if(e){
        console.log(e);
        process.exit(1);
    }

}



waterfall(tasks,resultCallback);








