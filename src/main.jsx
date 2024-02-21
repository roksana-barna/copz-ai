import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AiGenatare from './Components/Ai Generate/AiGenatare.jsx';
import Trusted from './Components/Trusted/Trusted.jsx';
import UseCase from './Pages/UseCase/UseCase.jsx';
import Chats from './Components/Chats/Chats.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element:<AiGenatare></AiGenatare>
          }
        ]
      },
      {
        path:'/useCases',
        element:<UseCase></UseCase>,
        children:[
          {
            path:'/useCases',
            element:<Chats></Chats>
          }
        ]
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-full mx-auto bg-black lg:px-20'>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)
