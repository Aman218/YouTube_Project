import { getData,postData } from "../Controller/YoutubeData.Controller.js"
import { verifyToken } from "../Middleware/verifyToken.js";
export function routes(app){
    app.get('/',(req,res)=>{
        getData(req,res)
    })
    app.post('/post',(req,res)=>{
        postData(req,res)
    });
}