import request from 'supertest';
import app from '../app';
import db from './db/';
jest.setTimeout(30000);

const BASE_URL = '/describapp/api';


describe('Api Controllers testing',()=>{
    beforeAll(()=>{
        db.connect();
    });

    it('should get all users by ajustador',done=>{
        const _id="5b135d633a7d8a0f4abbd91c"
        request(app).get(`${BASE_URL}/ajustador/${_id}/users`)
        .then(response=>{
            expect(response.statusCode).toBe(200);
            done();
        });

    });

    it.skip('should create an accident',done=>{
        const accident={
            user:'5b11cc59becbde1e1c45bfbe',
            lng:'',
            lat:'',
            ajustador:'5b135d633a7d8a0f4abbd91c',

        }
        request(app).post(`${BASE_URL}/accidents`)
        .send(accident)
        .then(response=>{
            expect(response.statusCode).toBe(200);
            done();
        });

    });

});
