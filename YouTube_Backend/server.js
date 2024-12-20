import express from 'express';
import mongoose from 'mongoose';
import {routes} from './Routes/YoutubeData.routes.js'
const app=express();
let databaseName='Youtube_Clone';
mongoose.connect(`mongodb+srv://Internshala:Internshala@cluster0.3dyau.mongodb.net/`);
import { userRoutes } from './Routes/User.routes.js';
import cors from 'cors';
import { commentRoutes } from './Routes/comment.routes.js';


app.use(cors());
app.use(express.json());//Built-In middleware used for parsing the data so that server can understand and performs operation on it!

//Application-level middleware->

// app.use((req,res,next)=>{
//     res.on('finish',()=>{
//         console.log(`Request method is ${req.method}, Url provided was ${req.url} and Status code of the server side ${res.statusCode}`)
//     })
//     next();
// })

let db=mongoose.connection;
db.on('open',()=>{
  console.log(`Connection is Successful`)
})
db.on('error',()=>{
  console.log(`Connection isn't successful`)
})

routes(app);
userRoutes(app);
commentRoutes(app);


app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})