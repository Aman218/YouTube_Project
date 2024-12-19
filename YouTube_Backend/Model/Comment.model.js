import mongoose from "mongoose";

const {Schema} =mongoose;

const commentSchema=new Schema({
    content:{
        type:String,
        required:String
    },
    username:{
        type:String,
        required:false
    }
})
const commentModel=mongoose.model('comments',commentSchema);
export default commentModel;