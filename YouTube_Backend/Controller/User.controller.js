import userModel from "../Model/User.model.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export function register(req,res){
    const {userName,userEmail,userPassword}=req.body;
     userModel.findOne({userEmail}).then((data)=>{
        if(data){  
            res.status(403).send({"Message":"User already exist"});
        }
        else{
            let newUser=new userModel({
                userName,
                userEmail,
                userPassword:bcrypt.hashSync(userPassword,10)
            })
            newUser.save().then((data)=>{
                res.status(200).json({message:data})
            }).catch((err)=>{
                res.status(500).send({message:err.message})
            })
           
        }
     })
}
export function login(req,res){
     const {userEmail,userPassword}=req.body;
     userModel.findOne({userEmail}).then((data)=>{
        if(!data){
           res.status(404).send({"message":"Current user isn't a registered one"}) 
        }
        else{
            let validPassword=bcrypt.compareSync(userPassword,data.userPassword)
            if(!validPassword){
                return res.status(403).send({"message":"invalid Password"})
            }
            let token=jwt.sign({id:data._id},"secretkey",{expiresIn:'1y'});
            res.send({
                user:{
                    Name: data.userName,
                    email:data.userEmail
                },
                
            tokenNumber:token
                
            })

        }
     }).catch((err)=>{
        res.status(500).json({message:err.message})
     })
}