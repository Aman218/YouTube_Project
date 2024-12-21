import Sidebar from "./SideBar";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { dataInfo } from "../utils/dummyData";
import SuggestedVideo from "./SuggestedVideo";
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { useState,useEffect } from "react";
import CommentSection from "./CommentSection";
import './ViewVideo.css'
import ShimmerView from "./ShimmerViewVideo";
function ViewVideo(){
   const [video_details,setVideoDetails]=useState([]);
   const [filteredData,setFilteredData]=useState('');
    const { flag, titleName } = useOutletContext();
   
    let video_id=useParams().id;
    console.log(video_id);

    useEffect(()=>{
      fetchdata()
    },[])
    async function fetchdata(){
      let response=await fetch('https://youtube-project-py16.onrender.com/');
      let data=await response.json();
      console.log(data)
      setVideoDetails(data);
      // set_dummy_VideoDetails(data)
      console.log(video_details)
       
    }
    useEffect(() => {
      if (video_details.length > 0) {
         const filtered = video_details.filter((item) => item._id === video_id);
         setFilteredData(filtered);
      }
   }, [video_details, video_id]);

  
    return (
        <>
         {flag?'':<Sidebar/>}
         
         <div id='video_view' className="flex">
          { filteredData && filteredData.length > 0 ?
          <div id='video' className="ml-[2rem] mr-8 my-[4.8rem] w-[65%] ">
        
            <iframe  id='height' src={`${filteredData[0].video_url}&autoplay=1&mute=0`}   className="rounded-[14px] w-[100%] h-[80vh]" ></iframe>
            <div className="pb-3 border-b border-gray-600" >
                <div className="mt-3">
                    <h1 id='head-des' className="text-[1.2rem] font-bold text-white">{filteredData[0].description}</h1>
                </div>
                 <div id='like-dislike' className="flex justify-between">
                  <div id='flex' className="flex items-center text-white">
                      <span>
                      <PersonIcon className='border border-red-100 rounded-full text-white'/>
                      </span>
                       <div id='owner' className="flex flex-col   mt-3 ml-2">
                          <h1 className="font-bold">{filteredData[0].owner}</h1>
                          <h2 className="text-[0.7rem]">{filteredData[0]._id.slice(0,3)} Subscribers</h2>
                       </div>
                       <button id='subscribe-btn' className="ml-8 bg-[#f1f1f1] text-[#000] font-bold px-6 py-2 rounded-[1.3rem] hover:bg-[#ff0000] hover:text-white">Subscribe</button>
                    </div>
                    <div id='flex2' className="text-white flex justify-center items-center">
                        <button id='div-nesting-of-like_dislike' className=" text-[0.8rem] bg-[#272727]  py-[0.4rem] px-4    mr-2 rounded-[1.2rem]  ">
                           <span id='like-btn' className="px-1 hover:text-[#00ff00] border-r border-white">
                              <ThumbUpIcon sx={{ fontSize: '1.5rem' }}/>
                           </span>
                           <span id='dislike-btn' className="px-1 hover:text-[#ff0000]">
                                <ThumbDownAltIcon sx={{ fontSize: '1.5rem' }}/>
                           </span>
                        </button>
                        <button id='share-btn' className="px-3 text-[0.9rem] py-2 flex justify-center items-center bg-[#272727] hover:bg-[#ff0000]   mr-2  rounded-[1.2rem]">
                          <ShareIcon/> <span className="font-bold">Share</span>
                        </button>
                        <button id='download-btn' className="px-3 text-[0.9rem] flex justify-center items-center py-2 bg-[#272727] hover:bg-[#ff0000]  mr-2 rounded-[1.2rem]">
                          <span className="font-bold">
                            <ArrowDownwardIcon/> Download
                          </span>
                        </button>
                        <button id='three-dot' className="px-1 flex justify-center items-center py-1 bg-[#272727] rounded-full hover:bg-[#ff0000]" ><LinearScaleIcon/>
                        </button>
                    </div>
                    
                 </div>
            </div>
            <div className="bg-[#292929] text-white mt-3 rounded-[0.6rem] p-4">
               <h1 className="text-[0.9rem] font-medium">{filteredData[0].views} <span className=' ml-3'>{filteredData[0].time}</span></h1>
               <h3 className="text-[0.96rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur nisi facilis eaque sequi fuga tempore delectus temporibus eum ducimus quam itaque rerum autem, ullam velit minus tempora. Error, ipsam?...More</h3>
            </div>
            <div className="comment-section">
              <CommentSection/>
            </div>
              
          </div>:<ShimmerView/>
}
          <div id='video_suggestion' className="w-[35%] ml-[-15px] my-[4.8rem]">
          <SuggestedVideo/>
          </div>
         
          </div>
        </>
    )
}
export default ViewVideo;