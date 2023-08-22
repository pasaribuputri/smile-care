import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Dashboard from './assets/pages/Dashboard/index.jsx'
import Services from './assets/pages/Services/index.jsx'
import Doctors from './assets/pages/Doctors/index.jsx'
import SmileGalery from './assets/pages/Smile-Galery/index.jsx'
import About from './assets/pages/About/index.jsx'
import Detail from './assets/pages/Smile-Galery/Detail/index.jsx'


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/doctors",
        element: <Doctors/>
      },
      {
        path: "/smile-galery",
        element: <SmileGalery/>,
      }, 
      {
        path:"/smile-galery/detail/:id",
        element: <Detail/>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
