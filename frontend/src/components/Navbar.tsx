import { useAuth } from "../context/AuthContext"

interface NavItem {
    itemName: string,
    itemPath: string
}

const navItems: NavItem[] = [
    {
        itemName: "Home",
        itemPath: "#"
    },
    {
        itemName: "About",
        itemPath: "#about"
    },
    {
        itemName: "Services",
        itemPath: "#services"
    },
]

export function Navbar() {
  
  	const {isAuthenticated} = useAuth();

  	if (isAuthenticated) {
		navItems[1].itemName="Appointements";
		navItems[1].itemPath="appointements";
		if (navItems.length < 4) {
			navItems.push({
				itemName: "Barbers",
				itemPath: "barbers"
			})
		}
	}

    return (
		<nav className="flex justify-between items-center p-6 text-white max-md:hidden">
		<ul className="flex space-x-8">
			{navItems.map((item) => (
			<li key={item.itemName}>
				<a href={item.itemPath} className="transition-colors hover:text-gold">
				{item.itemName}
				</a>
			</li>
			))}
		</ul>
		</nav>
    )
}