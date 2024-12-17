import mongoose from 'mongoose';
const {Schema} =mongoose;

let userSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    }

})
let userModel=mongoose.model('users',userSchema);
export default userModel;