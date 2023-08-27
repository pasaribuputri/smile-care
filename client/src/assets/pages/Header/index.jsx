import { useState } from "react"
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(true);

    const hamburgerClass = `block absolute right-5 lg:hidden ${isHamburgerActive ? 'hamburger-active':""}`
    const navClass = `absolute px-5 py-5 bg-slate-700 shadow-black rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none lg:rounded-none ${isMenuActive ? "hidden" : ""}`

  return (
    <header className='top-0 fixed bg-blue-950 font-helvatica bg-opacity-80 left-0 w-full z-10 shadow  text-white '>
        <div className='flex items-center'>
            <div className='container'>
                <div className="flex items-center mr-6 justify-between relative">
                    <div className="px-4">
                        <p className="font-bold text-lg block py-6 font-helvatica">SmileCare.id</p>
                    </div>
                    <div className="flex justify-center items-center px-4">
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
                    </div>
                </div>
            </div> 
        </div>
    </header>
  )
}

export default Header