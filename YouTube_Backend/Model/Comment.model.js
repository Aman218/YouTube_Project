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
    },
    Video_id_Num:{
        type:String,
        required:true
    }
})
const commentModel=mongoose.model('comments',commentSchema);
export default commentModel;