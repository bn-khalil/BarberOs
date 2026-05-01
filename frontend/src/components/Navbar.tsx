import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths"

interface NavItem {
    itemName: string,
    itemPath: string
}

const navItems: NavItem[] = [
    {
        itemName: "Home",
        itemPath: "/"
    },
    {
        itemName: "About",
        itemPath: "/about"
    },
    {
        itemName: "Contact Us",
        itemPath: "/contact-us"
    },
]

export function Navbar() {
    const navigate = useNavigate();

    return (
    <nav className="flex justify-between items-center p-6 bg-slate-900 text-white shadow-lg">
      <h2 className="text-2xl font-bold text-brand">BarberShop</h2> 
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.itemName}>
            <a href={item.itemPath} className="transition-colors hover:text-brand">
              {item.itemName}
            </a>
          </li>
        ))}
      </ul>
        <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all cursor-pointer" onClick={() => navigate(PATHS.LOGIN)}>
            Sign In
        </button>
        <button className="px-4 py-2 text-sm font-medium bg-brand text-white rounded-lg hover:bg-blue-700 transition-all shadow-md cursor-pointer" onClick={() => navigate(PATHS.REGISTER)}>
            Register
        </button>
        </div>
    </nav>
    )
}