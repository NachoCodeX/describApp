import BaseUser from './baseUser';
import {Schema} from 'mongoose';

const ajustadorSchema=new Schema({
},{discriminatorKey:'role'});

export default BaseUser.discriminator('AJUSTADOR',ajustadorSchema);

