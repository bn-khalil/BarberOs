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
        itemName: "Services",
        itemPath: "/services"
    },
    {
        itemName: "Contact Us",
        itemPath: "/contact-us"
    },
]

export function Navbar() {
    return (
    <nav className="flex justify-between items-center p-6 text-white">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.itemName}>
            <a href={item.itemPath} className="transition-colors hover:text-brand">
              {item.itemName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    )
}