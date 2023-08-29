import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import {FaUserCircle} from "react-icons/fa"

const Header = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(true);
    const [isUserActive, setIsUserActive] = useState(false);
    const [userLogin, setUserLogin] = useState({})
    
    const navigate = useNavigate()
    useEffect(()=> {
        if(localStorage.getItem("userLogin")){
            setUserLogin(JSON.parse(localStorage.getItem("userLogin")))
        }
    }, [])

    const hamburgerClass = `block absolute right-5 lg:hidden ${isHamburgerActive ? 'hamburger-active':""}`
    const navClass = `absolute px-5 py-5 bg-slate-700 shadow-black rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none lg:rounded-none ${isMenuActive ? "hidden" : ""}`
    const user = `bg-blue-950 rounded-b-lg py-2 px-5 w-1/5 right-0 top-full absolute  ${isUserActive ? "lg:visible invisible" : "invisible" }`

    

  return (
    <header className='top-0 fixed bg-blue-950 font-helvatica bg-opacity-80 left-0 w-full z-10 shadow  text-white '>
        <div className='flex items-center'>
                <div className="flex items-center justify-between relative w-full">
                    <div className="px-4">
                        <p className="font-bold text-lg block py-6 font-helvatica">SmileCare.id</p>
                    </div>
                    <div className="flex justify-center items-center px-4 md:justify-end">
                        <button id="hamburger" name='hamburger' type='button' className={hamburgerClass} onClick={()=> {
                            setIsHamburgerActive(!isHamburgerActive);
                            setIsMenuActive(!isMenuActive)
                        }}>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav className={navClass} id='nav-menu'>
                            <ul className="block lg:flex lg:gap-10 ">
                                <li className="group ">
                                    <NavLink to="/" className='flex p-1'>Home</NavLink>
                                </li>
                                <li className="group">
                                    <NavLink to="/services" className='flex p-1'>Services</NavLink>
                                </li>
                                <li className="group">
                                    <NavLink to="/doctors" className='flex p-1'>Doctors</NavLink>
                                </li>
                                <li className="group">
                                    <NavLink to="/smile-galery" className='flex p-1'>Smile Galery</NavLink>
                                </li>
                                <li className="group">
                                    <NavLink to="/about" className='flex p-1'>About</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <button className="hidden lg:block" onClick={()=> setIsUserActive(!isUserActive)}>
                            <FaUserCircle size={26} className="text-white"/>
                        </button>
                        <div className={user}>
                            <nav className="">
                                <div className="mb-3">{userLogin.nama}</div>
                                <ul>
                                    <li className="py-2 cursor-pointer" onClick={()=> navigate("/detail-profil")}>Lihat Profil</li>
                                    <hr />
                                    <li  className="py-2 cursor-pointer" onClick={(e)=> {
                                        e.preventDefault()
                                        fetch("http://localhost:3000/api/auth/logout",{
                                            method: "GET",
                                            headers: {
                                                "Authorization": `Bearer ${localStorage.getItem("token")}`
                                            }
                                        }).then((response)=> response.json())
                                        .then((res)=> {
                                            if(confirm("Yakin ingin keluar ?")){
                                                alert(res.message)
                                                localStorage.clear()
                                                navigate("/login")
                                            }
                                        })
                                    }}>Logout</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div> 
    </header>
  )
}

export default Header