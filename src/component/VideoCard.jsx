import { dataInfo } from "../utils/dummyData";
import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import './VideoCard.css'
function VideoCard(props){

const [video_details,setVideoDetails]=useState(dataInfo);
   
console.log(props.flag)
    return (
      
        <div id={`${props.flag?'grid':'grid-width'}`}>
        {
              
            video_details.map((video)=>{
                 return(
                    <ShowCard video={video}/>
                 )
            })
            
          
        }
        </div>
    
    )
}
export default VideoCard;