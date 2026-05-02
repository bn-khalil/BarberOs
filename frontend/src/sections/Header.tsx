import { Navbar } from "../components/Navbar";
import logo from "../assets/main-logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



export function Header() {
    return (
        <header className="w-full h-[10%] flex justify-between mx-auto">
            <div>
                <img className="w-40 h-auto" src={logo} alt="BarberOs Logo" />
            </div>
            <Navbar/>
            <div className="w-[15%] flex items-center justify-between px-5">
                <FaFacebook color="#CF9E51" size={25} />
                <FaInstagram color="#CF9E51" size={25}  />
                <FaTiktok color="#CF9E51" size={25} />
            </div>
        </header>
    );
}