import nodemailer from 'nodemailer';

module.exports={
    sendMail(mailOptions){
        console.log(mailOptions);
        return new Promise((resolve,reject)=>{
            nodemailer.createTestAccount((err,account)=>{
                const transporter = nodemailer.createTransport({
                    service:'Gmail',
                    auth:{
                        user:'15690190@tecvalles.mx',
                        pass:'15690190n'
                    }
                });
            
            
                transporter.sendMail(mailOptions,(error,info)=>{
                    if(error) return reject({error});
                    console.log("Message was successfully sent!...");
                    
                    resolve(true)
                });
            
            });
        });

    
    }
    
}
