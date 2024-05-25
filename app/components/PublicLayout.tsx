import {
    ReactNode,
    useState
} from "react"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "@remix-run/react";
import LoginIcon from "./icons/LoginIcon";

const PublicLayout = ({ children }: { children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "Portfolio",
        "Contact",
    ];
    return (
        <div className="bg-slate-900">
            {/* navigation bar */}
            <Navbar className="bg-slate-600 shadow-sm text-white" onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <p className=" text-inherit text-xl font-poppins">Logo</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">

                    <NavbarItem >
                        <Link to="/" className="font-poppins hover:text-blue-200" aria-current="page">
                            Home
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link to="/cartDetails" color="foreground" className="font-poppins hover:text-blue-200">
                            About
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link to="/" color="foreground" className="font-poppins hover:text-blue-200">
                            Services
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link to="/" color="foreground" className="font-poppins hover:text-blue-200">
                            Contact
                        </Link>
                    </NavbarItem>

                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="flex gap-6">
                        <Link to="/Login">
                            <div className="bg-blue-500 h-12 w-20 rounded-lg flex items-center justify-center  text-white font-poppins transition duration-300 delay-300 ease-in-out hover:scale-105 hover:bg-indigo-500 shadow-md gap-2" >
                                <LoginIcon/>
                                <p>Login</p>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="border border-blue-500 h-12 w-20 rounded-lg flex items-center justify-center  text-white font-poppins transition duration-300 delay-300 ease-in-out hover:scale-105 hover:border-indigo-500 shadow-md gap-4" >
                                <p>Signup</p>
                            </div>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                to={index === 0 ? '/' : index === 1 ? '/portfolio' : '/contact'}
                                color={
                                    index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}

                </NavbarMenu>
            </Navbar>

            {/* main contents */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default PublicLayout