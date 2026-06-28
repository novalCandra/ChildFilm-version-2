import { ChevronRight } from "lucide-react"
import LogoPng from "../assets/logo.png"
import { useState } from "react"
export default function Footer() {
    const [buttonArrow_one, setButtonArrow_one] = useState(false);
    const [buttonArrow_tow, setButtonArrow_two] = useState(false);
    return (
        <footer
            className="flex flex-col md:flex-row border border-t-gray-500 w-full px-10 py-10 justify-between space-y-4 md:space-y-0 bg-[#181A1C]">
            <div className="flex flex-col gap-4">
                <img src={LogoPng} alt="logoChild" className="w-40.75 h-11" />
                <p className="text-white font-lato">&copy;2026 Chill All Right Reserved</p>
            </div>
            <div className="hidden md:flex flex-row gap-7">
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl text-start font-lato text-[#C1C2C4]">Genre</h4>
                    <ul className="flex flex-col space-y-2 text-[#C1C2C4] font-bold font-lato cursor-pointer">
                        <li>Aksi</li>
                        <li>Anak-anak</li>
                        <li>Anime</li>
                        <li>Britania</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1 justify-end">
                    <ul className="flex flex-col space-y-2 text-[#C1C2C4] font-bold font-lato cursor-pointer">
                        <li>Drama</li>
                        <li>Fantasi Ilmiah & Fantasi</li>
                        <li>Kejahatan</li>
                        <li>KDrama</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1 justify-end">
                    <ul className="flex flex-col space-y-2 text-[#C1C2C4] font-bold font-lato cursor-pointer">
                        <li>Komedi</li>
                        <li>Petualangan</li>
                        <li>Perang</li>
                        <li>Romantis</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <ul className="flex flex-col space-y-2 text-[#C1C2C4] font-bold font-lato cursor-pointer">
                        <li>Sains & Alam</li>
                        <li>Thriller</li>
                    </ul>
                </div>
            </div>
            <div className="hidden md:flex flex-col gap-1">
                <h4 className="text-xl font-lato text-[#C1C2C4]">Bantuan</h4>
                <ul className="flex flex-col space-y-2 text-[#C1C2C4] font-bold font-lato cursor-pointer">
                    <li>FAQ</li>
                    <li>Kontak Kami</li>
                    <li>Privasi</li>
                    <li>Syarat & Ketentuan</li>
                </ul>
            </div>

            <div className="flex flex-col md:hidden justify-between gap-1">
                <div className="flex flex-row justify-between">
                    <h2 className="text-lg md:text-2xl font-lato font-bold text-white">Genre</h2>
                    <ChevronRight className={`${buttonArrow_one ? "block rotate-90 text-white transition" : "block text-white rotate-0 transition"}`} onClick={() => setButtonArrow_one(prev => !prev)} />
                </div>
                <ul className="space-y-2 text-[#C1C2C4] font-bold font-lato cursor-pointer transition-all">
                    {buttonArrow_one && (
                        <>
                            <li>FAQ</li>
                            <li>Kontak Kami</li>
                            <li>Privasi</li>
                            <li>Syarat & Ketentuan</li>
                        </>
                    )}
                </ul>
            </div>
            <div className="flex flex-col md:hidden gap-1">
                <div className="flex flex-row justify-between">
                    <h2 className="text-lg md:text-2xl font-lato font-bold text-white">Bantuan</h2>
                    <ChevronRight className={`${buttonArrow_tow ? "block rotate-90 text-white" : "block text-white rotate-0"}`} onClick={() => setButtonArrow_two(prev => !prev)} />
                </div>
                <ul className="space-y-2 text-[#C1C2C4] font-bold font-lato cursor-pointer transition-all">
                    {buttonArrow_tow && (
                        <>
                            <li>Aksi</li>
                            <li>Anak-anak</li>
                            <li>Anime</li>
                            <li>Britania</li>
                        </>
                    )}
                </ul>
            </div>
        </footer>

    )
}
