import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import Sidebar from './SideBar';
import { useState } from 'react';
import './Header.css';
import VideoCard from './VideoCard';
import { dataInfo } from '../utils/dummyData';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Header(){

 const [flag,setFlag]=useState(true);
 const [titleName,setTitleName]=useState('');

 function handleChange(e){
   setTitleName(e.target.value);
 
 }
 function handleMenuClick(){
    setFlag(!flag);
 }
    return (
        <>
          <div className="header-sec fixed top-0 w-[100%] z-40  bg-[#0F0F0F] flex  justify-between p-2 text-white">
               <div className="sec-1 flex items-center">
                   <div id='menu-margin' className='mr-2'>
                      <button onClick={handleMenuClick} className=' p-2 hover:rounded-full hover:bg-[#212121]'> <MenuIcon className=''/></button>
                   </div>
                   <div  id='img-container' className='flex items-center ml-3'>
                      <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png" id='img-id' alt="" width='30px' height='28px'/>
                      <h2 id='youtube-head' className='font-[500] text-[1.5rem]  pl-1'>YouTube</h2>
                   </div>
               </div>
               <div className="sec-2 border border-[#646060] h-[3rem]  w-[45%] rounded-[2rem] ">
                     
                     <div className='w-[100%]  h-[100%] flex justify-between'>
                        <input type="text" name="" onChange={(e)=>{handleChange(e)}} id="input-id" placeholder='Search' className=' bg-[#0f0f0f] inline-block w-[90%] h-[100%] rounded-l-[2rem]  pl-7 focus:w-[89.1%] outline-none border-none focus:outline-[#9ab5e38a] focus:outline-[0.02rem]'/>
                        <button id='search-btn' className='inline-block w-[10%] h-[100%] bg-[#212121] rounded-r-[2rem] hover:bg-[#30302f]'><SearchIcon/></button>
                        </div>
                     
               </div>
               <Link to='/SignIn'><div className="sec-3 mr-5">
                    <MoreVertIcon id='dot-icon'/>
                    <button id='sec3-button' className='border border-[#959593b1] rounded-full p-2 px-4 hover:rounded-full hover:bg-[#212121] hover:border-[#0f0f0f] '> <PersonIcon className='border border-red-100 rounded-full text-[#fff] '/> <span id='signin-text'>Sign In</span> </button>
               </div></Link>
          </div>
          <div className='flex'>
        <Outlet context={{ flag, titleName }}/>
      
        </div>
        </>
    )
}
export default Header;