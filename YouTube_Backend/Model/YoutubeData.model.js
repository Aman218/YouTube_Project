import mongoose from "mongoose";
import { Schema } from "mongoose";

const youtubeDataSchema = new Schema({
    imageIcon: { type: String, required: true },
    video_url: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: String, required: true },
    views: { type: String, required: true },
    time: { type: String, required: true },
    genre: { type: String, required: true }
});

const YoutubeDataModel = mongoose.model("YoutubeData", youtubeDataSchema);

export default YoutubeDataModel;
