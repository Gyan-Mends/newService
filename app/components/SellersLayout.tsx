import { ReactNode, useState } from "react"
import { Link } from "@remix-run/react";
import DashboardIcon from "./icons/DashboardIcon";
import ServiceIcon from "./icons/SericeIcon";
import EarningIcon from "./icons/EarningIcon";
import ReportIcon from "./icons/ReportIcon";
import UserIcon from "./icons/UserIcon";
import SettingsIcon from "./icons/SettingsIcon";
import LogoutIcon from "./icons/LogoutIcon";



const SellersLayout = ({ children }:{children:ReactNode}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="bg-slate-900 h-screen">
            <nav className="sidebar absolute lg:block w-1/6 bg-slate-700 h-[100vh] fixed pt-10 shadow-sm">
                {/* company logo */}
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white  text-2xl font-poppins">Logo</p>
                </div>

                {/* menu */}
                <div className="flex ml-8 mt-14">
                    <p className="text-lg text-[#007ee5]  font-poppins">Main</p>
                    <div className="border border-slate-400 w-[140px]  bg-slate-300  h-[1px] mt-3 ml-4"></div>
                </div>

                {/* Side navigation bar*/}
                <ul className="ml-10 font-poppins">
                    <li className="text-gray-200 text-sm transition duration-200 delay-200 ease-in-out hover:scale-105  w-[13vw] p-2 hover:bg-blue-600 rounded-md hover:text-white mt-2">
                        <Link to="/seller" className="flex gap-1" >
                            <DashboardIcon /> Dashboard
                        </Link>
                    </li>

                    <li className="text-gray-200 text-sm transition duration-200 delay-200 ease-in-out hover:scale-105  w-[13vw] p-2 hover:bg-blue-600 rounded-md hover:text-white mt-2">
                        {/* Dropdown trigger */}
                        <div className="relative">
                            <button onClick={toggleDropdown} className="flex gap-1">
                                <ServiceIcon className=""/> Service Management
                            </button>

                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <ul className="absolute transition-all duration-100 transform origin-top delay-200  hover:scale-100 w-[190px] rounded-md bg-slate-800 pt-2 pb-2 shadow-lg -ml-2 mt-2">

                                    <li>
                                        <Link
                                            to="/seller/services"
                                            className="block px-4 py-2 text-sm hover:rounded-md hover:text-blue-600 text-slate-200 hover:bg-gray-200"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services/manage"
                                            className="block text-sm hover:rounded-md  hover:text-[#007EE5] px-4 py-2 text-slate-200 hover:bg-gray-200"
                                        >
                                            Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services/manage"
                                            className="block text-sm hover:rounded-md hover:text-[#007EE5] px-4 py-2 text-slate-200 hover:bg-gray-200"
                                        >
                                            Estimates
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services/manage"
                                            className="block text-sm hover:rounded-md hover:text-[#007EE5] px-4 py-2 text-slate-200 hover:bg-gray-200"
                                        >
                                            Appointment
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li>

                    <li className="text-gray-200 text-sm transition duration-200 delay-200 ease-in-out hover:scale-105  w-[13vw] p-2 hover:bg-blue-600 rounded-md hover:text-white mt-2">
                        <Link to="/dashboard" className="flex gap-1" >
                            <EarningIcon /> Earning
                        </Link>
                    </li>
                </ul>


                {/* menu */}
                <div className="flex ml-8 mt-8">
                    <p
                        className="text-lg text-[#007ee5]  font-poppins">Others</p>
                    <div className="border w-[130px] border-slate-400 text-sm hover:text-[#007EE5] h-[1px] mt-3 ml-4"></div>
                </div>
                <ul className="ml-10 font-poppins ">
                <li className="text-gray-200 text-sm transition duration-200 delay-200 ease-in-out hover:scale-105  w-[13vw] p-2 hover:bg-blue-600 rounded-md hover:text-white mt-2">
                        <Link to="/dashboard" className="flex gap-1" >
                            <ReportIcon /> Reports
                        </Link>
                    </li>

                    <li className="text-gray-200 text-sm transition duration-200 delay-200 ease-in-out hover:scale-105  w-[13vw] p-2 hover:bg-blue-600 rounded-md hover:text-white mt-2">
                        <Link to="/dashboard" className="flex gap-1" >
                            <UserIcon /> Profile
                        </Link>
                    </li>

                    <li className="text-gray-200 text-sm transition duration-200 delay-200 ease-in-out hover:scale-105  w-[13vw] p-2 hover:bg-blue-600 rounded-md hover:text-white mt-2">
                        <Link to="/dashboard" className="flex gap-1" >
                            <SettingsIcon/> Settings
                        </Link>
                    </li>
                    <li className="text-gray-200 text-sm transition duration-200 delay-200 ease-in-out hover:scale-105  w-[13vw] p-2 hover:bg-blue-600 rounded-md hover:text-white mt-2">
                        <Link to="/dashboard" className="flex gap-1" >
                            <LogoutIcon /> Logout
                        </Link>
                    </li>
                </ul>


            </nav>

            <main className="ml-[17vw] py-4 px-4">
                
                {children}
            </main>
        </div>
    )
}

export default SellersLayout
