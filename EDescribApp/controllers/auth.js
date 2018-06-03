import User from '../models/user';
import Policy from '../models/policy';
import Ajustador from '../models/ajustador';

import moment from 'moment';
import {sendMail} from './mailer';
import {generateToken} from '../shared/';
import { authenticate } from './helpers.auth';



module.exports={
    async signIn(req,res){
        const {email,password}=req.body;
        try {
            const response = await authenticate(email,password).then(res=>res);
            return res.status(200).send(response);
        } catch ({message,code}) {
            console.log(message);
            return res.status(code).send(message);
        }
        // return res.status(200).send('OK');
    },
    async signUp(req,res){
        console.log("SIGNUP CONTROLLER!");

        let user =new User({...req.body.user});
        let policy=new Policy({...req.body.policy});
        
        user.policy=policy._id
        
        const token=generateToken(user._id);
        // console.log(user);
        const mailOptions={
            from:'Foo <foo@example.com>',
            to:user.email,
            subject:'Test subject',
            text:'Test text',
            html:`<h1>${user.firstName} active your acount now!</h1>
                <h3>Click here->http://192.168.1.72/8080/account/active/${token}</h3>`
        }
        try {
            await policy.save().then(res=>res);
            //  ajustador.save().then(res=>res);
            await user.save().then(response=>response);
            // await sendMail(mailOptions).then(response=>response);
            
            return res.status(200).send('OK!');
        } catch (error) {
            console.error(error);
            
            return res.status(500).send(`Server Error ${error}`)
        }
        
    },
    
}
