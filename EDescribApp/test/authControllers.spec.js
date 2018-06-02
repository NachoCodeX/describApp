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
            email:'4811095288@gmail.com',
            password:'12345678'
        }

        request(app).post(`${BASE_URL}/signin`)
        .send(user)
        .then(response=>{

            expect(response.statusCode).toBe(200);
            done();
        });

    });



    it.skip('should create a User with role USER',done=>{
        
        const user={
            email:'4811095288@gmail.com',
            password:'12345678',
            confirmPassword:'12345678',
            firstName:'Jesus Ignacio',
            lastName:'Castillo Barrios',
            age:19,
            rfc:'RFCTEST',
            gender:'Masculino',
            nationality:'Mexicana',
            maritalStatus:'Soltero',
            address:{
                state:'San Luis Potosí',
                municipality:'Ciudad Valles',
                street:{
                    name:'Pedro Antonio Santos',
                    noExt:'48',
                    noInt:'A'
                },
                col:'Zona Centro',
                postalCode:79000
            },
            contact:{
                mobile:'4811095288',
                phone:null
            },
            drivers:{
                0:{
                    firstName:'Driver Test First Name',
                    lastName:'Driver Test Last Name',
                    age:66,
                    gender:'Femenino'
                }
            },
        }

        request(app).post(`${BASE_URL}/signup`)
        .send(user)
        .then(response=>{

            expect(response.statusCode).toBe(200)
            done();
        });
    
    });

});