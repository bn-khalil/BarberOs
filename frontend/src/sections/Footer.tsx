import { FaPhone, FaEnvelope, FaLocationDot, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import logo from "../assets/main-logo.png"
export function Footer (){
  return (
    <footer className="bg-main text-gray-300 pb-12 pt-20 px-6 md:px-16 font-sans border-t border-[#C59D5F]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <img className="w-50 h-auto" src={logo} alt="BarberOs Logo" />
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-gray-400">
            BarberOs is a team of passionate and experienced professionals dedicated to providing the highest quality hair styling tools on the market.
          </p>
          <div className="flex space-x-5">
            <div className="bg-[#C59D5F] p-2 rounded-full cursor-pointer hover:bg-white transition-all duration-300">
              <FaFacebookF className="text-[#111111]" size={16} />
            </div>
            <div className="bg-[#C59D5F] p-2 rounded-full cursor-pointer hover:bg-white transition-all duration-300">
              <FaInstagram className="text-[#111111]" size={16} />
            </div>
            <div className="bg-[#C59D5F] p-2 rounded-full cursor-pointer hover:bg-white transition-all duration-300">
              <FaTiktok className="text-[#111111]" size={16} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-xl font-bold font-serif">Contacts</h3>
          <ul className="space-y-5">
            <li className="flex items-center space-x-4 group">
              <FaPhone className="text-[#C59D5F] group-hover:scale-110 transition-transform" size={18} />
              <span className="text-sm">+1 (800) 333-4455</span>
            </li>
            <li className="flex items-center space-x-4 group">
              <FaEnvelope className="text-[#C59D5F] group-hover:scale-110 transition-transform" size={18} />
              <span className="text-sm">hello@barbers.com</span>
            </li>
            <li className="flex items-start space-x-4 group">
              <FaLocationDot className="text-[#C59D5F] mt-1 group-hover:scale-110 transition-transform" size={18} />
              <span className="text-sm leading-relaxed">
                396 Broome St, New York, NY<br/>10013, United States
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-xl font-bold font-serif">Newsletter</h3>
          <p className="text-sm text-gray-400">
            Stay in the loop with our latest blogs and offers. Subscribe to our newsletter now.
          </p>
          <div className="flex flex-col sm:flex-row w-full overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className=" border border-gold/30 text-txt-col px-4 py-3 outline-none grow text-sm"
            />
            <button className="bg-[#D4A35B] hover:bg-[#B88A4A] text-[#111111] font-bold px-6 py-3 transition-colors text-sm uppercase tracking-wider">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest text-gray-500 space-y-4 md:space-y-0">
        <div className="flex space-x-8">
          <a href="#" className="hover:text-[#C59D5F] transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-[#C59D5F] transition-colors">Privacy Policy</a>
        </div>
        <p className="text-gray-400">
          Copyright © 2023 <span className="text-[#C59D5F] font-bold">BarbarOs</span>
        </p>
      </div>
    </footer>
  );
};
