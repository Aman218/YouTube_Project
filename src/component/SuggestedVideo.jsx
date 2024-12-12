import { dataInfo } from "../utils/dummyData";
import './SuggestedVideo.css';
import { Link } from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';
function SuggestedVideo() {
    return (
        <>
            {
                dataInfo.map((data) => {
                    return (
                        <div id='suggested-video-id' className="text-white grid  border-b border-[#2322224c]  ">
                           <Link to={`/viewing_video/${data.id}`}> <div id='bottom-margin' className="h-[7.3rem] mb-4">
                                <img id='suggested-img' src={data.imageIcon} alt="" className="h-[100%] w-[220px] rounded-lg" />
                            </div></Link>
                            <div className="text-[0.5rem]">
                                <div className="mt-1 ml-1">
                                <h1 className="text-[0.7rem] font-bold">{data.description}</h1>
                                </div>
                              
                                <h1 className="mt-4 ml-2 text-[#d6d1d1] font-[500] text-[0.8rem]">{data.owner}</h1>
                                <h1 className="mt-[0.1rem] ml-2 text-[#d6d1d1] font-[500] text-[0.7rem]"><span className="mr-3">{data.views} </span>  <span className="ml-[-6px]"><CircleIcon sx={{ fontSize: '0.4rem' }} /></span> <span>{data.time}</span></h1>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default SuggestedVideo;