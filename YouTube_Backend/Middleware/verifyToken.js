import jwt from 'jsonwebtoken';
import userModel from '../Model/User.model.js';
export function verifyToken(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] == 'JWT') {
        jwt.verify(req.headers.authorization.split(" ")[1],"secretkey",function(err,verifiedToken){
            if(err){
                return res.status(403).send({"message":"invalid Token"});
            } 
            userModel.findById(verifiedToken.id).then((user)=>{
                // console.log(user);
                console.log(verifiedToken.id)
                console.log(req.headers.authorization.split(" ")[1])
                next();
            }).catch((err)=>{
                res.status(500).send({message:err.message})
            })


        })
    }
    else{
        res.status(404).send({"message":"Token not present"});
    }

}