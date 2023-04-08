import close from "../../assets/shared/icon-close.svg"
import { NavLink } from "react-router-dom";

const Smallmenu = ({showMenu, active}) => {
    return (  
          <ul className={active ? 'backdrop-blur-sm bg-white/20 flex-col flex fixed inset-0 left-1/4 navtext' : 'hidden'}>
            <img src={close} alt="" className="w-5 pt-10 right-6 absolute"  onClick={showMenu} />
            <NavLink to= {"/"}>
            <li className="pl-8 mt-20 py-6 md:py-12 lg:py-6 md:border-b-2"><span className="font-bold">00</span> Home</li>
            </NavLink>
            <NavLink to= {"/Destination"}>
            <li className="pl-8 py-6 md:py-12 lg:py-6"><span className="font-bold">01</span> Destination</li>
            </NavLink>
            <NavLink to= {"/Crew"}>
            <li className="pl-8 py-6 md:py-12 lg:py-6"><span className="font-bold">02</span> Crew</li>
            </NavLink>
            <NavLink to= {"/Technology"}>
            <li className="pl-8 py-6 md:py-12 lg:py-6"><span className="font-bold">03</span> Technology</li>
            </NavLink>
          </ul>
    );
}
 
export default Smallmenu;