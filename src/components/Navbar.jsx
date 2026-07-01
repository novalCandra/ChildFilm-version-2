import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
export default function Navbar({ LogoPngDekstop, LogoPngMobile, LogoProvile, mapNavbar, mapNavbarMenu }) {
    const [menu, setMenu] = useState(false);
    function setModalMenu() {
        setMenu(prev => !prev)
    }
    return (
        <nav
            className="flex flex-row justify-between items-center bg-[#2F3334] text-white px-4 md:px-8 py-7 w-full max-md-w cursor-pointer z-10">
            <div className="flex flex-row space-x-2 md:space-x-10">
                <img src={LogoPngDekstop} alt="logo" className="hidden md:block w-25 md:w-32" />
                <img src={LogoPngMobile} alt="logo" className="block md:hidden w-7" />
                {mapNavbar?.map((item) => (
                    <ul key={item.id} className="flex flex-row gap-3 md:gap-20 text-sm md:text-xl font-lato items-center">
                        <li><Link to={item.path}>{item.textList}</Link></li>
                    </ul>
                ))}
            </div>
            <div className="flex flex-row space-x-2 md:space-x-4 items-center">
                <img src={LogoProvile} alt="profile" className=" w-7 md:w-12 rounded-full md:rounded-2xl" />
                <button type="submit" className="flex flex-col bg-[#2F3334]" onClick={setModalMenu}>
                    <ChevronDown size={28} className="text-white md:size-8 cursor-pointer" />
                    {menu && (
                        <div className={`absolute top-22 right-2 flex flex-col bg-[#181A1C]/80 w-39 h-32 text-white z-10 rounded-md transition duration-300 origin-top-right ${menu ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                            {mapNavbarMenu.map((item) => {
                                const IconItem = item.CheckIcon
                                return (
                                    <ul key={item.id} className="flex flex-col px-2 h-full justify-center space-y-4 cursor-pointer">
                                        <Link to={item.path}>
                                            <li className={`flex flex-row items-center gap-1 transition duration-100 delay-100 hover:text-blue-600`}><IconItem size={24} /><span className="text-base md:text-md font-lato">{item.textList}</span></li>
                                        </Link>
                                    </ul>
                                )
                            })}
                        </div>
                    )}
                </button>
                {/* <!-- <div className="hidden flex flex-row space-x-3">
                                    <a href="./page/login.html">
                                        <button type="submit"
                                            className="bg-[#2F3334] border border-[#E7E3FC3B] w-28 px-4 py-2.5 rounded-md font-lato cursor-pointer transition duration-150 hover:bg-[#192DB7]">LOGIN</button>
                                    </a>
                                    <a href="./page/register.html"></a>
                                    <button type="submit"
                                        className="bg-[#181A1C] border border-[#E7E3FC3B] w-28 px-4 py-2.5 rounded-md font-lato">Register</button>
                                </div> --> */}
            </div>
        </nav>
    )
}
