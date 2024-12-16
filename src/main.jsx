import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Error from './component/Error.jsx';
import Header from './component/Header.jsx';
import Sidebar from './component/SideBar.jsx';
import VideoCard from './component/VideoCard.jsx';
import ViewVideo from './component/ViewVideo.jsx';
import SignIn from './component/SignIn.jsx';

let appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index: true, // This will be the default child rendered at '/'
        element: (
          <>
            <Sidebar /> {/* Render Sidebar */}
            <VideoCard /> {/* Render VideoCard */}
          </>
        ),
      },
      {
        path:'/viewing_video/:id',
        element:<ViewVideo/>
      }

    ]
    
  },
  {
    path:"/SignIn",
    element:<SignIn/>
  },
  {
    path:'*',
    element:<Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
