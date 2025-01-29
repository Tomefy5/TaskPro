import { LayoutDashboard, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

export default function SidebarMenu() {

    const menuItems = [
        { menu: "Dashboard", link: "/", Icon: LayoutDashboard },
        { menu: "Tasks", link: "tasks", Icon: ClipboardList },
    ]

  return (
    <ul className="menu w-full">
        {menuItems.map((item, index) => (
            <li key={index} className="flex flex-row gap-2">
                <Link to={item.link} className="w-full">
                    <item.Icon size={15}/>
                    <span>{item.menu}</span>
                </Link>
            </li>
        ))}
    </ul>
  )
}
