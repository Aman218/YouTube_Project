import { dataInfo } from "../utils/dummyData";
import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import './VideoCard.css';
import CategoryWiseFilter from "./CategoryWiseFilter";
import { useOutletContext } from "react-router-dom";
function VideoCard(){
  const { flag, titleName } = useOutletContext(); // Access props passed via context
const [video_details,setVideoDetails]=useState(dataInfo);

useEffect(() => {
    if (titleName) {
      const filteredArray = dataInfo.filter((videoDes) =>
        videoDes.description.toLowerCase().includes(titleName.toLowerCase())
      );
      setVideoDetails(filteredArray);
    } else {
      setVideoDetails(dataInfo);
    }
  }, [titleName]);

// console.log(props.flag)
    return (
        <>
        
         <div id='button-category' className="fixed p-6  top-[3rem] w-[100%] bg-[#0f0f0f] z-20 left-[10.9rem] h-[4.5rem] text-white"> <CategoryWiseFilter SetDetails={setVideoDetails}/></div> 
        <div id={`${flag?'grid':'grid-width'}`}>
        {
              
            video_details.map((video)=>{
                 return(
                    <ShowCard key={video.id} video={video}/>
                 )
            })
            
          
        }
        </div>
       
        </>
    
    )
}
export default VideoCard;