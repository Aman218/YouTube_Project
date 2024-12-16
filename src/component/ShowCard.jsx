import './ShowCard.css';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
function ShowCard(props){
    // console.log(props)
    return (
        <>

            <Link to={`/viewing_video/${props.video._id}`}><div className="item text-white">
                <img src={props.video.imageIcon} alt="" id='img-size' className='rounded-[8px]'/>
                <div className='flex gap-2 mt-3'>
                    <div>
                        <PersonIcon className='border border-red-100 rounded-full'/>
                    </div>
                    <div className='text-[0.8rem]'>
                       <h2 className='font-bold'>{props.video.description}</h2>
                       <h2 className='font-light text-[#8a8888] mt-1'>{props.video.owner}</h2>
                       <div className='flex gap-3 text-[#928e8e]'>
                       <span>{props.video.views}</span>
                       <span className="ml-[2px] mr-[-8px]"><CircleIcon sx={{ fontSize: '0.4rem' }} /></span>
                       <span>{props.video.time}</span>
                       </div>
                       
                    </div>
                </div>
            
            </div>
            </Link>
        
        </>
    )
}
export default ShowCard;