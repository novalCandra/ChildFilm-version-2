import LogoPngDekstop from "../assets/logo.png"
import LogoPngMobile from "../assets/logo_mobile.png"
import LogoProvile from "../assets/provil.png"
export default function Navbar() {
    return (
        <nav
            className="flex flex-row justify-between items-center bg-[#2F3334] text-white px-4 md:px-8 py-7 w-full max-md-w cursor-pointer">
            <div className="flex flex-row space-x-2 md:space-x-10">
                <img src={LogoPngDekstop} alt="logo" className="hidden md:block w-25 md:w-32" />
                <img src={LogoPngMobile} alt="logo" className="block md:hidden w-7" />
                <ul className="flex flex-row gap-3 md:gap-20 text-sm md:text-xl font-lato items-center">
                    <li>Series</li>
                    <li>Film</li>
                    <li>Daftar Saya</li>
                </ul>
            </div>
            <div className="flex flex-row space-x-2 md:space-x-0">
                <img src={LogoProvile} alt="profile" className=" w-7 md:w-12 rounded-full md:rounded-2xl" />
                <select name="" id="" className="bg-[#2F3334] w-1 px-3 md:px-4">
                    <option value="" className="font-lato rounded-4xl">Profile saya</option>
                    <option value="" className="font-lato rounded-4xl">Ubah Premium</option>
                    <option id="logout" value="logout" className="font-lato cursor-pointer rounded-4xl">Keluar</option>
                </select>
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
