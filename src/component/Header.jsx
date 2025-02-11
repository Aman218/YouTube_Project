import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import Sidebar from './SideBar';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import './Header.css';
import VideoCard from './VideoCard';
import { dataInfo } from '../utils/dummyData';
import { Outlet } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import GoogleIcon from '@mui/icons-material/Google';
import InventoryIcon from '@mui/icons-material/Inventory';
import YoutubeIcon from '../assets/Youtube_Icon.png';
function Header() {
   const navigate=useNavigate();
   const [dropdownVisible, setDropdownVisible] = useState(false); 
   const token = localStorage.getItem('token');
   function handleDropdownToggle() {
      setDropdownVisible(!dropdownVisible);
   }

   // Handle Logout
   function handleLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('Name');  
      alert('Logged out Successfully'); 
      setDropdownVisible(false);  
      navigate('/')      
      
   }
   const Name_user = localStorage.getItem('Name');
   const Email_user = localStorage.getItem('Email');
   const [flag, setFlag] = useState(true);
   const [titleName, setTitleName] = useState('');

   function handleChange(e) {
      setTitleName(e.target.value);

   }
   function handleMenuClick() {
      setFlag(!flag);
   }

   return (
      <>
         <div className="header-sec fixed top-0 w-[100%] z-40  bg-[#0F0F0F] flex  justify-between p-2 text-white">
            <div className="sec-1 flex items-center">
               <div id='menu-margin' className='mr-2'>
                  <button onClick={handleMenuClick} className=' p-2 hover:rounded-full hover:bg-[#212121]'> <MenuIcon className='' /></button>
               </div>
               <div id='img-container' className='flex items-center ml-3'>
               <img src={YoutubeIcon} id='img-id' alt='' width='30px' height='28px' />

                  <h2 id='youtube-head' className='font-[500] text-[1.5rem]  pl-1'>YouTube</h2>
               </div>
            </div>
            <div className="sec-2 border border-[#646060] h-[3rem]  w-[45%] rounded-[2rem] ">

               <div className='w-[100%]  h-[100%] flex justify-between'>
                  <input type="text" name="" onChange={(e) => { handleChange(e) }} id="input-id" placeholder='Search' className=' bg-[#0f0f0f] inline-block w-[89.7%] h-[100%] rounded-l-[2rem]  pl-7  outline outline-[#21212100] border-[#21212100] focus:outline-[#497dd8f1]' />
                  <button id='search-btn' className='inline-block w-[10%] h-[100%] bg-[#212121] rounded-r-[2rem] hover:bg-[#30302f]'><SearchIcon /></button>
               </div>

            </div>
            {token ? <div className="sec-3 mr-2">
               <div className=' flex items-center'>
               <MoreVertIcon id='dot-icon-first' />
               <button onClick={handleDropdownToggle} className='border flex justify-center items-center  font-bold border-[#959593b1] rounded-full bg-[#fff]  px-2  hover:rounded-full hover:bg-[#212121] hover:border-[#fff] '> <span className=' text-2xl font-bold text-[#ff0000]'>{Name_user.charAt(0).toUpperCase()}</span> </button>
               </div>
               {dropdownVisible && (
                  <div id='drop-down' className="dropdown-menu  absolute  w-[24%] top-[53px] right-3 bg-[rgb(33,33,33)] p-2 rounded-lg shadow-lg">
                     <div className='flex gap-4'>
                     <button className=' flex justify-center items-center  font-bold  rounded-full   hover:rounded-full hover:bg-[#212121] hover:border-[#fff] '> <span className=' text-2xl font-bold text-[#ff0000]'>{Name_user.charAt(0).toUpperCase()}</span> </button> 
                        <div>
                           <h1>{Name_user.slice(0,1).toUpperCase()+Name_user.slice(1)}</h1>
                           <h1>{Email_user}</h1>
                           <Link to='/channelDetails'><h1 className='text-[#3d3aee] hover:text-[#ff0000] cursor-pointer font-medium'>View Your Channel</h1></Link>
                        </div>
                     </div>
                     <div className='flex gap-2 items-center border-t-2 mt-3 pt-3'>
                        <GoogleIcon/>
                     <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">Google Account</button>
                     </div>
                     <div className='flex gap-2 items-center border-t-2 mt-3 pt-3'>
                        <InventoryIcon/>
                     <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">Purchases and Membership</button>
                     </div>

                     <div className='flex gap-2 items-center border-t-2 mt-3 pt-3'>
                        <SwitchAccountIcon/>
                     <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">Switch Account</button>
                     </div>
                     <div className='flex gap-2 items-center border-t-2 mt-3 pt-3'>
                        <LogoutIcon/>
                     <button onClick={handleLogout} className="text-white p-1 w-full text-left hover:text-[#ff0000]">Logout</button>
                     </div>
                    
                  </div>
               )}
            </div> :   <Link to='/SignIn'><div className="sec-3 mr-5">
                    <MoreVertIcon id='dot-icon'/>
                    <button id='sec3-button' className='border border-[#959593b1] rounded-full p-2 px-4 hover:rounded-full hover:bg-[#212121] hover:border-[#0f0f0f] '> <PersonIcon className='border border-red-100 rounded-full text-[#fff] '/> <span id='signin-text'>Sign In</span> </button>
               </div></Link>}

         </div>
         <div className='flex'>
            <Outlet context={{ flag, titleName }} />

         </div>
      </>
   )
}
export default Header;