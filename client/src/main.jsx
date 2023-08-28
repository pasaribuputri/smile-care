import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Dashboard from './assets/pages/Dashboard/index.jsx'
import Services from './assets/pages/Services/index.jsx'
import Doctors from './assets/pages/Doctors/index.jsx'
import SmileGalery from './assets/pages/Smile-Galery/index.jsx'
import About from './assets/pages/About/index.jsx'
import Detail from './assets/pages/Smile-Galery/Detail/index.jsx'
import DetailDoctor from './assets/pages/Doctors/Detail/index.jsx'
import DetailServices from './assets/pages/Services/Detail/index.jsx'
import Login from './assets/pages/Login/index.jsx'
import SignIn from './assets/pages/SignUp/index.jsx'
import ProfileDetail from './assets/pages/Profil/index.jsx'



const router = createBrowserRouter([
  {
    path: "/login",
    element: localStorage.getItem("userLogin") ? <Navigate to="/"/> : <Login/> 
  },
  {
    path: "/sign-up",
    element: <SignIn/>
  },
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: localStorage.getItem("userLogin") ? <Dashboard/> : <Navigate to="/login"/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/detail-services/:id_service",
        element: <DetailServices/>
      },
      {
        path: "/doctors",
        element: <Doctors/>,
      },
      {
        path: "/doctors/detail-doctor/:id_dokter",
        element: <DetailDoctor/>
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
      },
      {
        path: "/detail-profil",
        element: <ProfileDetail/>
      }
    ]
  } 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

