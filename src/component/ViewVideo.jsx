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
import './ViewVideo.css'
function ViewVideo(){
    const { flag, titleName } = useOutletContext();
    let video_id=useParams().id;
    console.log(video_id);
   let filteredData=dataInfo.filter((data)=>{
    if(data.id==video_id){
        return true;
    }
   })
   console.log(filteredData[0].video_url)
    return (
        <>
         {flag?'':<Sidebar/>}
         
         <div id='video_view' className="flex">
          <div id='video' className="ml-[2rem] mr-8 my-[4.8rem] w-[65%] ">
            <iframe id='height' src={`${filteredData[0].video_url}&autoplay=1&mute=0`}   className="rounded-[14px] w-[100%] h-[80vh]" ></iframe>
            <div className="">
                <div className="mt-3">
                    <h1 className="text-[1.2rem] font-bold text-white">{filteredData[0].description}</h1>
                </div>
                 <div id='like-dislike' className="flex justify-between">
                  <div id='flex' className="flex items-center text-white">
                      <span>
                      <PersonIcon className='border border-red-100 rounded-full text-white'/>
                      </span>
                       <div id='owner' className="flex flex-col justify-center  mt-3 ml-2">
                          <h1 className="font-bold">{filteredData[0].owner}</h1>
                          <h2>{filteredData[0].id}</h2>
                       </div>
                       <button id='subscribe-btn' className="ml-8 bg-[#f1f1f1] text-[#000] font-bold px-6 py-2 rounded-[1.3rem] hover:bg-[#ff0000] hover:text-white">Subscribe</button>
                    </div>
                    <div id='flex2' className="text-white flex justify-between">
                        <button id='div-nesting-of-like_dislike' className=" h-[2.5rem] bg-[#272727] hover:bg-[#414143]  mt-3  mr-2 rounded-[1.2rem]">
                           <span id='like-btn' className="px-3 border-r border-white">
                              <ThumbUpIcon/>
                           </span>
                           <span id='dislike-btn' className="px-2">
                                <ThumbDownAltIcon/>
                           </span>
                        </button>
                        <button id='share-btn' className="px-3 py-1 bg-[#272727] hover:bg-[#414143] mt-3 mr-2 h-[2.5rem] rounded-[1.2rem]">
                          <ShareIcon/> <span className="font-bold">Share</span>
                        </button>
                        <button id='download-btn' className="px-3 py-1 bg-[#272727] hover:bg-[#414143]  h-[2.5rem] mr-2 mt-3 rounded-[1.2rem]">
                          <span className="font-bold">
                            <ArrowDownwardIcon/> Download
                          </span>
                        </button>
                        <button id='three-dot' ><LinearScaleIcon className="rounded-full hover:bg-[#414143] bg-[#272727]"/>
                        </button>
                    </div>
                    
                 </div>
            </div>
              
          </div>
          <div id='video_suggestion' className="w-[35%] ml-[-15px] my-[4.8rem]">
          <SuggestedVideo/>
          </div>
         
          </div>
        </>
    )
}
export default ViewVideo;