import { Navbar } from "../components/Navbar";
import logo from "../assets/main-logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



export function Header() {
    return (
        <header className="w-full container flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 md:py-4 mx-auto">
            <div>
                <img className="w-40 max-md:w-30 max-sm:w-25 h-auto" src={logo} alt="BarberOs Logo" />
            </div>
            <Navbar />
            <div className="grid grid-cols-3 justify-items-center items-center gap-7 max-md:gap-5 transition-transform">
                <FaFacebook className="text-gold text-lg md:text-2xl cursor-pointer hover:scale-110 transition" />
                <FaInstagram className="text-gold text-lg md:text-2xl cursor-pointer hover:scale-110 transition" />
                <FaTiktok className="text-gold text-lg md:text-2xl cursor-pointer hover:scale-110 transition" />
            </div>
        </header>
    );
}