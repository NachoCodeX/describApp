import User from '../models/user';
import {sendMail} from './mailer';
import {generateToken} from '../shared/';
import { authenticate } from './helpers.auth';



module.exports={
    async signIn(req,res){
        console.log("SIGN IN CONTROLLER");
        const {email,password}=req.body;
        try {
            const user = await authenticate(req.body).then(res=>res);
            console.log(user);
            
        } catch (error) {
            console.log("ERROR!");
            console.log(error.message);
            
            
        }
        
        return res.status(200).send('OK');
    },
    async signUp(req,res){
        console.log("SIGNUP CONTROLLER!");
        console.log({...req.body});
        
        let user =new User({...req.body});
        const token=generateToken(user._id);
        const mailOptions={
            from:'Foo <foo@example.com>',
            to:user.email,
            subject:'Test subject',
            text:'Test text',
            html:`<h1>${user.firstName} active your acount now!</h1>
                <h3>Click here->http://192.168.1.72/8080/account/active/${token}</h3>`
        }
        try {
            // user.save();
            await user.save().then(response=>response);
            await sendMail(mailOptions).then(response=>response);
            
            return res.status(200).send('OK!');
        } catch (error) {
            return res.status(500).send(`Server Error ${error}`)
        }
        
    },
    
}
