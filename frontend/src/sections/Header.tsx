import { Navbar } from "../components/Navbar";
import logo from "../assets/main-logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";



export function Header() {
    const {isAuthenticated, user} = useAuth();
    return (
        <header className="w-full flex justify-between items-center py-2 md:py-4 mx-auto">
            <div>
                <img className="w-40 max-md:w-30 max-sm:w-25 h-auto" src={logo} alt="BarberOs Logo" />
            </div>
            <Navbar />
            {!isAuthenticated ? (
                <div className="grid grid-cols-3 justify-items-center items-center gap-7 max-md:gap-5 transition-transform">
                    <FaFacebook className="text-gold text-lg md:text-2xl cursor-pointer hover:scale-110 transition" />
                    <FaInstagram className="text-gold text-lg md:text-2xl cursor-pointer hover:scale-110 transition" />
                    <FaTiktok className="text-gold text-lg md:text-2xl cursor-pointer hover:scale-110 transition" />
                </div>
            ): (
            <div className="text-txt-col  rounded-full border border-gold cursor-pointer">
                <div className="bg-gold/50 m-0.5 w-8 h-8 rounded-full flex items-center justify-center">
                    {user?.username.toUpperCase().charAt(0)}
                </div>
            </div>)}
        </header>
    );
}