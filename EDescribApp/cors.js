export default function cors(req,res,next){
    console.log("CORS");
    // console.log(req);
    
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, Origin, X-Requested-With, Content-Type, Accept');
    
    next();

}