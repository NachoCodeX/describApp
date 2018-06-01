import request from 'supertest';
import app from '../app';
import db from './db/';
jest.setTimeout(30000);

const BASE_URL = '/describapp/auth';


describe("Auth Controllers Testing",()=>{
    beforeAll(()=>{
        db.connect();
    });

    it('should response POST /signin',done=>{
        const user={    
            email:'4811095288ic@gmail.com',
            password:'12345678'
        }

        request(app).post(`${BASE_URL}/signin`)
        .send(user)
        .then(response=>{

            expect(response.statusCode).toBe(200);
            done();
        });

    });



    it.skip('It should response POST method /signup',done=>{
        
        const user={
            email:'4811095288ic@gmail.com',
            password:'12345678',
            confirmPassword:'12345678',
            firstName:'Jesus Ignacio',
            lastName:'Castillo Barrios',
            age:21
        }

        request(app).post(`${BASE_URL}/signup`)
        .send(user)
        .then(response=>{
            expect(response.statusCode).toBe(200)
            done();
        });
    
    });    
});