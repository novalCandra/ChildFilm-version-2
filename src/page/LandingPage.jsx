import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import HeaderLandingPage from "../components/HeaderLandingPage";
import { ConfigHeaderLanding } from "../config/ConfigLandingPage";
import { dataDumyFilmTrending, dataDumyRilisBaru, dataDumyTopRating, dataFilmLanjutan } from "../data/DataDumy";
import AsideComponents from "../components/AsideComponents";
import AsideComponentsTwo from "../components/AsideComponentsTwo";
export default function LandingPage() {
    const [popup, setPopup] = useState({
        visible: false,
        x: 0,
    })
    const scrollRefFilm = useRef(null)
    const scrollRefRating = useRef(null)
    const scrollRefRilis = useRef(null)
    const scrollReTrending = useRef(null)
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
                {/* <section className="relative py-5 px-10 md:py-10 md:px-20 space-y-10" data-aos="fade-up">
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
                        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className="shrink-0 group">
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
                </section> */}
                <AsideComponentsTwo HeadingAside={"Melanjutkan Tonton Film"} reloadMapData={dataFilmLanjutan} scrollRef={scrollRefFilm} scrollRefRight={scrollRefFilm} scrollRefLeft={scrollRefFilm} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
                <AsideComponents HeadingAside={"Top Rating Film dan Series Hari ini"} reloadMapping={dataDumyTopRating} scrollRef={scrollRefRating} scrollRefRight={scrollRefRating} handleHoverProps={handleHover} scrollRefLeft={scrollRefRating} handleLeaveProps={handleLeave} />
                <AsideComponents HeadingAside={"Film Trending"} reloadMapping={dataDumyFilmTrending} scrollRef={scrollReTrending} scrollRefLeft={scrollReTrending} scrollRefRight={scrollReTrending} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
                <AsideComponents HeadingAside={"RILIS BARU"} reloadMapping={dataDumyRilisBaru} scrollRef={scrollRefRilis} scrollRefLeft={scrollRefRilis} scrollRefRight={scrollRefRilis} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
            </main>
            {/* END MAIN */}
        </div >
    )
}
