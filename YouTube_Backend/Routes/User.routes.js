import { login, register } from "../Controller/User.controller.js";


export function userRoutes(app){
    app.post('/register',(req,res)=>{
        register(req,res)
    });
    app.post('/login',(req,res)=>{
        login(req,res)
    })
}