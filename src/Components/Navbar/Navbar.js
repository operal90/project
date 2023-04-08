import logo from "../../assets/shared/logo.svg"
import menuIcon from "../../assets/shared/icon-hamburger.svg"
import Smallmenu from "./smallScreenMenu";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Nav = () => {

  const [active,setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  const currentPage = "py-6 md:py-12 lg:py-6 border-b-2 cursor-pointer"
  const otherPage = "py-6 md:py-12 lg:py-6 cursor-pointer"

  return ( 
    <div className="flex justify-between md:items-center lg:items-center text-white pt-8 pl-8 md:pt-0 lg:pt-8">
      <div> <img src={logo} alt=""/> </div>
      
      <div>
        <div className="absolute right-6 top-10">
          <img src={menuIcon} alt="" className="md:hidden lg:hidden"  onClick={showMenu}/>
        </div>

        <ul className="hidden md:flex gap-16 md:gap-10 lg:px-24 md:px-10 backdrop-blur-sm bg-white/20 rounded navtext">
          <NavLink to= {"/"} className={({isActive}) => (isActive ? currentPage: otherPage) }>
          <li><span className=" font-bold">00</span> Home</li>
          </NavLink>
          <NavLink to= {"/Destination"} className={({isActive}) => (isActive ? currentPage: otherPage) } >
            <li><span className=" font-bold">01</span> Destination</li>
          </NavLink>
          <NavLink to= {"/Crew"} className={({isActive}) => (isActive ? currentPage: otherPage) } >
          <li><span className=" font-bold">02</span> Crew</li>
          </NavLink>
          <NavLink to= {"/Technology"} className={({isActive}) => (isActive ? currentPage: otherPage) }>
          <li><span className=" font-bold">03</span> Technology</li>
          </NavLink>
        </ul>

        <Smallmenu showMenu={showMenu} active={active} />
      </div>
    </div>
   );
}
 
export default Nav;