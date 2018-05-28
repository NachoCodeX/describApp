import request from 'supertest';


describe(()=>{
    test('Sign in controller',done=>{
        
        request(app).post('/describapp/auth/signup')
        .then(response=>{
            console.log("TEST!");
            console.log("TEST2!");
            
            expect(response.statusCode).toBe(200)
        });




    });
    
});