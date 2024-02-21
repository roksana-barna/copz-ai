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
            path:'/ai-generate',
            element:<AiGenatare></AiGenatare>
          }

        ]

      },
      {
        path:'/',
        element:<Trusted></Trusted>
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
