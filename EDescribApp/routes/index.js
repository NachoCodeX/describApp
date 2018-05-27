import Api from './api';
import Auth from './auth';
import {Router} from 'express';



module.exports={
    Auth:Auth(Router()),
    Api:Api(Router())

}