module.exports={
    PORT:process.env.PORT || 8000,
    URI: process.env.DB || 'mongodb://127.0.0.1:27017/describdb',
    MONGO_CONFIG:{
        user:'admin',
        pass:'123456',
        auth:{authdb:'admin'},
    },
    SALT_FACTOR:10,
    SECRET_TOKEN:'motynacho'


}