import './ShowCard.css';
import PersonIcon from '@mui/icons-material/Person';
function ShowCard(props){
    console.log(props)
    return (
        <>

            <div className="item text-white">
                <img src={props.video.imageIcon} alt="" id='img-size' className='rounded-[7px]'/>
                <div className='flex gap-2 mt-3'>
                    <div>
                        <PersonIcon className='border border-red-100 rounded-full'/>
                    </div>
                    <div className='text-[0.8rem]'>
                       <h2 className='font-bold'>{props.video.description}</h2>
                       <div className='flex gap-3 text-[#928e8e]'>
                       <span>{props.video.views}</span>
                       <span>{props.video.time}</span>
                       </div>
                       
                    </div>
                </div>
            
            </div>
        
        </>
    )
}
export default ShowCard;