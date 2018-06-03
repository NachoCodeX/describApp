import {findUsersByAjustador} from './helpers.api';
import Accident from '../models/accident';



module.exports={
    async getUsers(req,res){
        const users=await findUsersByAjustador().then(res=>res);
        console.log(users);
        
        return res.status(200).send({users});
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