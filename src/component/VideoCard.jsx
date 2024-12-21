import { dataInfo } from "../utils/dummyData";
import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import './VideoCard.css';
import CategoryWiseFilter from "./CategoryWiseFilter";
import { useOutletContext } from "react-router-dom";
import Shimmer from './Shimmer.jsx';
function VideoCard(){
  const { flag, titleName } = useOutletContext(); // Access props passed via context
const [video_details,setVideoDetails]=useState([]);
const [dummy_video_details,set_dummy_VideoDetails]=useState([]);

useEffect(()=>{
  fetchdata()
},[])
async function fetchdata(){
  let response=await fetch('https://youtube-project-py16.onrender.com/');
  let data=await response.json();
  setVideoDetails(data);
  set_dummy_VideoDetails(data)
}

useEffect(() => {
    if (titleName) {
      const filteredArray = dummy_video_details.filter((videoDes) =>
        videoDes.description.toLowerCase().includes(titleName.toLowerCase())
      );
      setVideoDetails(filteredArray);
    } else {
      setVideoDetails(dummy_video_details);
    }
  }, [titleName]);

// console.log(props.flag)
    return (
        <>
        
         <div id='button-category' className="fixed p-6  top-[3rem] w-[100%] bg-[#0f0f0f] z-20 left-[10.9rem] h-[4.5rem] text-white"> <CategoryWiseFilter SetDetails={setVideoDetails}/></div> 
      {video_details.length>0?
            <div id={`${flag?'grid':'grid-width'}`}>
            {
                  
                video_details.map((video)=>{
                     return(
                        <ShowCard key={video._id} video={video}/>
                     )
                })
                
              
            }
            </div>:
            <Shimmer/>
      }
       
        </>
    
    )
}
export default VideoCard;