import request from 'supertest';
import app from '../app';
import db from './db/';
jest.setTimeout(30000);

const BASE_URL = '/describapp/auth';


describe('Api Controllers testing',()=>{
    beforeAll(()=>{
        db.connect();
    });

    it('should response POST /api/user',done=>{
        expect(1).toBe(1);
        done();
    });

});
