import {findUserByID,findUsersByAjustador} from './helpers.api';
import Accident from '../models/accident';



module.exports={
    async getUser(req,res){
        console.log("GET USERS!");
        
        try {
            const user= await findUserByID(req.params._id);
            console.log(user);
            
            return res.status(200).send(user);
        } catch (error) {
            
        }
    },
    async getUsers(req,res){
        const users=await findUsersByAjustador(req.params._id).then(res=>res);
        console.log(users);
        
        return res.status(200).send(users);
    },
    async createAccident(req,res){
        const accident=new Accident({...req.body});
        console.log(accident);
        
        try {
            accident.save();
            return res.status(200).send(accident);
        } catch (error) {
            
        }
    }



}