import express from 'express';
import cors from './cors';
import {Auth,Api} from './routes/';
const APP_NAME='/describapp';
const app =express();


app.use(cors);

app.use(express.urlencoded({extended:false}));
app.use(express.json());


/*  ROUTES
    app.use('descripapp/auth',RoutesFile); 
    -->http://localhost:8000/descripapp/auth/signup
*/


app.use(`${APP_NAME}/api`,Api);
app.use(`${APP_NAME}/auth`,Auth);

//Error Handler 
// app.use((err,req,res,next)=>{
//     console.log(err.message);
//     // return res.status(500).end('OK!');
//     next();
// });


export default app;