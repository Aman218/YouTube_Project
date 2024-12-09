
import HomeIcon from '@mui/icons-material/Home';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HistoryIcon from '@mui/icons-material/History';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MovieIcon from '@mui/icons-material/Movie';
import StreamIcon from '@mui/icons-material/Stream';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsIcon from '@mui/icons-material/Sports';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import './SideBar.css'
function Sidebar(props) {
   console.log(props)
   return (
      <>
         {props.flag ?
            <div id='side-bar-sec1' className="side-bar w-[5%] flex flex-col justify-center items-center">

               <div className=' hover:bg-[#212121] hover:rounded-md flex flex-col justify-center items-center p-3 mb-4 text-white text-sm hover:cursor-pointer'>
                  <HomeIcon />
                  <span className='text-[0.7rem]'>Home</span>
               </div>
               <div className=' hover:bg-[#212121] hover:rounded-md hover:cursor-pointer flex flex-col justify-center items-center p-3 mb-4 text-white text-sm'>
                  <VideoCameraFrontIcon />
                  <span className='text-[0.7rem]'>Shorts</span>
               </div>
               <div className=' hover:bg-[#212121] hover:rounded-md hover:cursor-pointer flex flex-col justify-center items-center p-3 mb-4 text-white text-sm'>
                  <SubscriptionsIcon />
                  <span className='ml-5 text-[0.7rem]'>Subscription</span>
               </div>
               <div className=' hover:bg-[#212121] hover:rounded-md hover:cursor-pointer  flex flex-col justify-center items-center p-3 mb-4 text-white text-sm'>
                  <AccessibilityNewIcon />
                  <span className='text-[0.7rem]'>You</span>
               </div>
               <div className=' hover:bg-[#212121] hover:rounded-md hover:cursor-pointer flex flex-col justify-center items-center p-3 mb-4 text-white'>
                  <HistoryIcon />
                  <span className='text-[0.7rem]'>History</span>
               </div>


            </div> :
            <div className='sideBar-description w-[15%] overflow-y-scroll h-[80vh] text-white'>
               <div className="sidebar-1 border-b border-[#212121] mb-2">
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <HomeIcon />
                     <span className='pl-3'>Home</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]' >
                     <VideoCameraFrontIcon />
                     <span className='pl-3'>Shorts</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <SubscriptionsIcon />
                     <span className='pl-3'>Subscription</span>
                  </div>
               </div>
               <div className="sidebar-2 border-b border-[#212121] mb-2">
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <AccessibilityNewIcon />
                     <span className='pl-3'>You</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <HistoryIcon />
                     <span className='pl-3'>History</span>
                  </div>
               </div>
               <div className="sidebar-3 p-3 border-b border-[#212121] mb-2">
                  <h1 className='pl-3'>Explore</h1>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <TrendingUpIcon />
                     <span className='pl-3'>Trending</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <ShoppingBagIcon />
                     <span className='pl-3'>Shopping</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <CheckroomIcon />
                     <span className='pl-3'>Fashion</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <LibraryMusicIcon />
                     <span className='pl-3'>Music</span>
                  </div>

                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <MovieIcon />
                     <span className='pl-3'>Movies</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <StreamIcon />
                     <span className='pl-3'>Live Stream</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <SportsEsportsIcon />
                     <span className='pl-3'>Gaming</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <NewspaperIcon />
                     <span className='pl-3'>News</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <SportsIcon />
                     <span className='pl-3'>Sports</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <PodcastsIcon />
                     <span className='pl-3'>Podcast</span>
                  </div>
                  <div className='p-3 cursor-pointer hover:bg-[#212121]'>
                     <GolfCourseIcon />
                     <span className='pl-3'>Courses</span>
                  </div>
               </div>
            </div>

         }

      </>
   )
}
export default Sidebar;