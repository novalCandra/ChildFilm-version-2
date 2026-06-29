import { ArrowLeft, ArrowRight, Check, ChevronDown, Dot, Play, Star } from "lucide-react";
import AvatarPng from "../assets/avatar.png"
import blue from "../assets/blue.png"
import shaxam from "../assets/shaxam.png"
import korea from "../assets/korea.png"
import mermaid from "../assets/mermaid.png"
import suzume from "../assets/suzume.png"
import dino from "../assets/dino.png"
import sonic from "../assets/sonic.png"
import area from "../assets/area.png"
import hero from "../assets/hero copy.png"
import rio from "../assets/rio_vertikal.png"
import tomorrow from "../assets/toworrow.png"
import hero_one from "../assets/hero_one.png"
import guarden from "../assets/guardan.png"
import eropa from "../assets/eropa.png"
import duyung from "../assets/duyumg_one.png"
import korea_vertikal from "../assets/koreaVertikal.png"
import duty from "../assets/duty.png"
import missing from "../assets/missing.png"
import spiderman from "../assets/spiderman.png"
import fastFurios from "../assets/fastVertikal.png"
import dead from "../assets/dead.png"
import bluPack from "../assets/blueVertikal.png"
import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import HeaderLandingPage from "../components/HeaderLandingPage";
import { ConfigHeaderLanding } from "../config/ConfigLandingPage";
export default function LandingPage() {
    const [popup, setPopup] = useState({
        visible: false,
        x: 0,
    })
    const scrollRefFilm = useRef(null)
    const scrollRefRating = useRef(null)
    const scrollRefRilis = useRef(null)
    const scrollReTrending = useRef(null)
    const scroll = (ref, amount) => {
        ref?.current.scrollBy({
            left: amount,
            behavior: "smooth"
        })
    }
    const handleHover = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPopup({
            visible: true,
            x: rect.left,
        })
    }

    const handleLeave = () => {
        setPopup((prev) => ({
            ...prev,
            visible: true
        }))
    }

    useEffect(() => {
        Aos.init({ duration: 1200, delay: 100 })
        Aos.refresh()
    }, [])
    return (
        <div className="bg-[#22282A]">
            {/* HERO */}
            <HeaderLandingPage heading={ConfigHeaderLanding.heading} deskripsi={ConfigHeaderLanding.deskripsi} deskripsiButtonOne={ConfigHeaderLanding.deskripsiButtonOne} deskripsiButtonTwo={ConfigHeaderLanding.deskripsiButtonTwo} deskripsiButtonThree={ConfigHeaderLanding.deskripsiButtonThree} />
            {/* END hero */}
            {/* MAIN */}
            <main className="relative">
                <section className="relative py-5 px-10 md:py-10 md:px-20 space-y-10" data-aos="fade-up">
                    <h2 className="text-white text-xl md:text-3xl font-lato">Melanjutkan Tonton Film</h2>
                    <button onClick={() => scroll(scrollRefFilm, -300)}
                        className="hidden md:block absolute left-16 bottom-32 px-2 py-2 rounded-full bg-[#2F3334] z-10 cursor-pointer"><ArrowLeft size={24} className="text-white" /></button>
                    <div id="film" ref={scrollRefFilm} className="flex gap-7 space-y-5 overflow-x-auto scrollbar transition overflow-y-hidden">
                        <div className="shrink-0">
                            <img src={AvatarPng} alt="avatar"
                                className="w-70 md:w-100 md:h-60 rounded-2xl bg-cover bg-repeat bg-center" />
                            <div className="flex flex-row justify-between -mt-10 px-3 text-white bg-blue-200">
                                <span className="font-lato">Don’t Look Up</span>
                                <div className="flex flex-row gap-3 items-center">
                                    <Star size={20} />
                                    <span className="font-lato text-md">4.5/5</span>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className="shrink-0 group">
                            <div className="relative transition duration-200 group-hover:opacity-0">
                                <span
                                    className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                    Baru</span>
                                <img src={blue} alt="avatar"
                                    className="w-70 md:w-100 md:h-60 rounded-2xl bg-cover bg-repeat bg-center" />
                                <div className="flex flex-row justify-between -mt-10 px-3 text-white bg-blue-200">
                                    <span className="font-lato">Don’t Look Up</span>
                                    <div className="flex flex-row gap-3 items-center">
                                        <Star size={20} />
                                        <span className="font-lato text-md">4.5/5</span>
                                    </div>
                                </div>
                            </div>
                            {popup.visible && (
                                <div className="absolute top-0 left-0 scale-95 pointer-events-none duration-200 w-80 md:w-102 md:h-115 z-50 bg-[#181A1C] rounded-[20px] opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto" style={{ left: popup.x, top: 100 }}>
                                    <img src={bluPack} alt="suzume" className="rounded-t-[20px] bg-center bg-repeat bg-cover w-100 h-50 md:h-63.5 md:w-102" />
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between px-5 py-2 md:px-0 md:py-0">
                                            <div className="flex flex-row md:px-10 md:py-5 gap-4">
                                                <button className="bg-white py-3 px-3 rounded-full"><Play size={20} className="text-black" /></button>
                                                <button className="bg-transparent py-3 px-3 rounded-full border border-white"><Check size={20} className="text-white" /></button>
                                            </div>
                                            <div className="flex flex-row md:px-10 md:py-5">
                                                <button className="bg-transparent py-3 px-3 rounded-full border border-white"><ChevronDown size={20} className="text-white" /></button>
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:px-10 gap-2 items-center">
                                            <div className="flex flex-col space-y-0 md:space-y-1 px-1">
                                                <p className="text-msm md:text-lg text-white font-lato font-bold">“Episode 1”</p>
                                                <div className="flex flex-row items-center gap-5">
                                                    <div className="w-60 bg-white h-2.5 rounded-full">
                                                        <div className="bg-blue-400 h-2.5 rounded-2xl" style={{ width: `${10}%` }} />
                                                    </div>
                                                    <span className="font-lato text-[1rem] md:text-md text-gray-400">2j 33m</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between px-10 py-2 gap-2 items-center text-white">
                                            <p className="font-lato text-sm md:text-lg">BOLA</p>
                                            <Dot size={40} />
                                            <p className="font-lato text-sm md:text-lg">Piala Dunia</p>
                                            <Dot size={40} />
                                            <p className="font-lato text-sm md:text-lg">Japan</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="shrink-0">
                            <img src={shaxam} alt="avatar"
                                className="w-70 md:w-100 md:h-60 rounded-2xl bg-cover bg-repeat bg-center" />
                            <div className="flex flex-row justify-between -mt-10 px-3  text-white bg-blue-200">
                                <span className="font-lato">Don’t Look Up</span>
                                <div className="flex flex-row gap-3 items-center">
                                    <Star size={20} />
                                    <span className="font-lato text-md">4.5/5</span>
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <img src={korea} alt="avatar"
                                className="w-70 md:w-100 md:h-60 rounded-2xl bg-cover bg-repeat bg-center" />
                            <div className="flex flex-row justify-between -mt-10 px-3 text-white bg-blue-200">
                                <span className="font-lato">Don’t Look Up</span>
                                <div className="flex flex-row gap-3 items-center">
                                    <Star size={20} />
                                    <span className="font-lato text-md">4.5/5</span>
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <img src={mermaid} alt="avatar"
                                className="w-70 md:w-100 md:h-60 rounded-2xl bg-cover bg-repeat bg-center" />
                            <div className="flex flex-row justify-between -mt-10 px-3 text-white bg-blue-200">
                                <span className="font-lato">Don’t Look Up</span>
                                <div className="flex flex-row gap-3 items-center">
                                    <Star size={20} />
                                    <span className="font-lato text-md">4.5/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => scroll(scrollRefFilm, 300)}
                        className="hidden md:block absolute right-16 bottom-36 px-2 py-2 rounded-full bg-[#2F3334] -translate-y-1/2"><ArrowRight size={24} className="text-white" /></button>
                </section>
                <section className="relative py-1 px-10 md:px-20 space-y-10" data-aos="fade-up">
                    <h1 className="text-white text-xl md:text-3xl font-lato">Top Rating Film dan Series Hari ini</h1>
                    <button type="button" onClick={() => scroll(scrollRefRating, -300)}
                        className="hidden md:block absolute left-12 bottom-52 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowLeft size={24} className="text-white opacity-50 hover:opacity-100" /></button>
                    <div id="scorlRating" ref={scrollRefRating} className="w-full h-full flex flex-row gap-5 overflow-x-auto scrollbar scrollbar-h-2 scale-100" data-aos="fade-up">
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                Baru</span>
                            <img src={suzume} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeatx bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0">
                            <img src={dino} alt="avatar"
                                className=" w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0">
                            <div className="group">
                                <img src={sonic} alt="avatar"
                                    className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                            </div>
                        </div>
                        <div className="relative shrink-0 group">
                            <div className="block transition-opacity duration-300 group-hover:opacity-0">
                                <span
                                    className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                    Baru</span>
                                <img src={area} alt="avatar"
                                    className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                            </div>
                            <div className="absolute top-0 left-0 hidden group-hover:block group-hover:scale-100 rounded-[20px] w-100 h-116 bg-[#181A1C] transition-opacity duration-300 z-10">
                                <img src={dead} alt="suzume" className="rounded-t-[20px] h-63.75 w-102" />
                                <div className="flex flex-col">
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row px-10 py-5 gap-4">
                                            <button className="bg-white py-3 px-3 rounded-full"><Play size={20} className="text-black" /></button>
                                            <button className="bg-transparent py-3 px-3 rounded-full border border-white"><Check size={20} className="text-white" /></button>
                                        </div>
                                        <div className="flex flex-row px-10 py-5">
                                            <button className="bg-transparent py-3 px-3 rounded-full border border-white"><ChevronDown size={20} className="text-white" /></button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row px-10 py-3 gap-2">
                                        <span className="bg-gray-500 px-2 text-center text-md md:text-lg rounded-xl">13+</span>
                                        <p className="text-md md:text-lg text-white">16 Episode</p>
                                    </div>
                                    <div className="flex flex-row justify-between px-10 py-2 gap-2 items-center text-white">
                                        <p className="font-lato text-sm md:text-lg">MISTERI</p>
                                        <Dot size={40} className="text-gray-500" />
                                        <p className="font-lato text-sm md:text-lg">KRIMINAL</p>
                                        <Dot size={40} className="text-gray-500" />
                                        <p className="font-lato text-sm md:text-lg">Fantasi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-[5px] cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={hero} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-[5px] cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={rio} alt="avatar"
                                className=" w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                    </div>
                    <button type="button" onClick={() => scroll(scrollRefRating, 300)}
                        className="hidden md:block absolute right-12 bottom-64 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowRight size={24} className="text-white opacity-50 hover:opacity-100" /></button>
                </section>
                <section className="relative py-5 px-10 md:px-20 space-y-10" data-aos="fade-up">
                    <h1 className="text-white text-xl md:text-3xl font-lato">Film Trending</h1>
                    <button onClick={() => scroll(scrollReTrending, -300)}
                        className="hidden md:block absolute left-12 bottom-64 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowLeft size={24} className="text-white" /></button>
                    <div id="scrollFilm" ref={scrollReTrending} className="flex gap-7 overflow-x-auto scrollbar overflow-y-hidden" data-aos="fade-up">
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={tomorrow} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={hero_one} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={guarden} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={eropa} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={duyung} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={korea_vertikal} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={hero} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                    </div>
                    <button onClick={() => scroll(scrollReTrending, 300)}
                        className="hidden md:block absolute right-12 bottom-73 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowRight size={24} className="text-white" /></button>
                </section>
                <section className="relative py-5 px-10  md:px-20 space-y-10" data-aos="fade-up">
                    <h1 className="text-white text-xl md:text-3xl font-lato">Rilis Baru</h1>
                    <button type="button" onClick={() => scroll(scrollRefRilis, -300)}
                        className="hidden md:block absolute left-12 bottom-64 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowLeft size={24} className="text-white" /></button>
                    <div id="rilis" ref={scrollRefRilis} className="flex gap-7 overflow-x-auto scrollbar overflow-y-hidden" data-aos="fade-up">
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={duyung} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                Baru</span>
                            <img src={duty} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1.5 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={hero} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                Baru</span>
                            <img src={area} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <img src={missing} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <img src={spiderman} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <img src={fastFurios} alt="avatar"
                                className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                    </div>
                    <button type="button" onClick={() => scroll(scrollRefRilis, 300)}
                        className="hidden md:block absolute right-12 bottom-73 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowRight size={24} className="text-white" /></button>
                </section>
            </main>
            {/* END MAIN */}
        </div >
    )
}
