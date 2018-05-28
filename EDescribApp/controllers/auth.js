module.exports={
    signIn(req,res){
        console.log("SIGN IN CONTROLLER");
        return res.status(200).send('OK');
    },
    signUp(req,res){
        console.log("SIGNUP CONTROLLER!");
        return res.status(200).send('OK');
    },
    
}
