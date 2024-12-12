import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
function Error(){
    return (
        <>

           <div className="h-[100vh] flex flex-col justify-center items-center">
               <h1 className="text-[4rem] text-white font-bold">Error Page Not Found</h1>
               <Link to='/'><h3 className="text-[3rem] mt-3 cursor-pointer text-[#ff0000]">    Go Back <HomeIcon sx={{ fontSize: '2.5rem' }} />
               </h3></Link>
           </div>

        </>
    )
}
export default Error;