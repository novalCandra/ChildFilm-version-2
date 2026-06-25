import { ArrowLeft, ArrowRight, Check, ChevronDown, CircleAlert, Dot, Play, Star, VolumeOff } from "lucide-react";
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
export default function LandingPage() {
    return (
        <div className="bg-[#22282A]">
            {/* HERO */}
            <header
                className="relative bg-[url('assets/header.png')] bg-repeat md:bg-cover md:bg-center h-100 md:min-h-190 flex items-end md:items-center">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
                <div className="relative flex flex-col z-10 text-white px-2 md:px-10 w-full pb-6 md:pb-0 space-y-5">
                    <div className="space-y-4 md:space-y-6 px-10 w-full md:max-w-2xl">
                        <h1 className="text-2xl md:text-5xl font-lato">Duty After School</h1>
                        <p className="text-md  md:text-lg font-lato line-clamp-3 md:line-clamp-none">Sebuah benda tak dikenal
                            mengambil alih dunia. Dalam
                            keputusasaan,
                            Departemen
                            Pertahanan
                            mulai
                            merekrut
                            lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
                            dalam perang.</p>
                    </div>
                    <div className="relative flex flex-col justify-end px-4 md:px-10">
                        <div className="flex flex-row md:gap-3 items-center justify-between ">
                            <div className="flex flex-row space-x-1.5 md:space-x-6">
                                <button
                                    className="bg-blue-800 text-white px-1 py-2 md:px-5 md:py-3 w-20 rounded-2xl font-lato">Mulai</button>
                                <div className="flex flex-row bg-[#3D4142]/70 px-2 py-2 md:px-6 md:py-3 rounded-xl font-lato gap-2 items-center">
                                    <CircleAlert size={24} />
                                    <span>Selengkapnnya</span>
                                </div>
                                <button className="border-2 border-gray-500 rounded-full md:rounded-3xl px-1 py-1 md:px-2.5 md:py-2.5
                        text-xl font-lato">18+</button>
                            </div>
                            <button
                                className="border-2 border-gray-500 rounded-full md:rounded-3xl px-1 py-1 md:px-2.5 md:py-2.5 text-xl font-lato cursor-pointer">
                                <VolumeOff size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* END hero */}

            {/* MAIN */}
            <main className="relative">
                <section className="relative py-5 px-10 md:py-10 md:px-20 space-y-10">
                    <h2 className="text-white text-xl md:text-3xl font-lato">Melanjutkan Tonton Film</h2>
                    <button onClick="scrollContainer('scorll', -300)"
                        className="hidden md:block absolute left-16 bottom-32 px-2 py-2 rounded-full bg-[#2F3334] z-10 cursor-pointer"><ArrowLeft size={24} className="text-white" /></button>
                    <div id="scorll" className="flex gap-7 overflow-x-auto scorll transition overflow-y-hidden">
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
                        <div className="shrink-0 group">
                            <div className="relative bg-red-200 transition duration-200 group-hover:opacity-0">
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
                            <div className="absolute top-10 left-125 duration-200 w-[408px] h-[460px] z-10 bg-[#181A1C] rounded-[20px] opacity-0 group-hover:opacity-100">
                                <img src={bluPack} alt="suzume" className="rounded-t-[20px] bg-center bg-repeat bg-cover h-63.5 w-102" />
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
                                    <div className="flex flex-row px-10 gap-2 items-center">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-md md:text-lg text-white font-lato font-bold">“Episode 1”</p>
                                            <div className="flex flex-row items-center gap-5">
                                                <div className="w-60 bg-white h-2.5 rounded-full">
                                                    <div className="bg-blue-400 h-2.5 rounded-2xl" style={{ width: `${10}%` }} />
                                                </div>
                                                <span className="font-lato text-gray-400">2j 33m</span>
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
                    <button onClick="scrollContainer('scorll', 300)"
                        className="hidden md:block absolute right-16 bottom-36 px-2 py-2 rounded-full bg-[#2F3334] -translate-y-1/2"><ArrowRight size={24} className="text-white" /></button>
                </section>
                <section className="relative py-1 px-10 md:px-20 space-y-10">
                    <h1 className="text-white text-xl md:text-3xl font-lato">Top Rating Film dan Series Hari ini</h1>
                    <button onClick="scrollContainer('scorlRating',-300)"
                        className="hidden md:block absolute left-12 bottom-52 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowLeft size={24} className="text-white" /></button>
                    <div id="scorlRating" className="flex flex-row gap-5 overflow-x-auto overflow-y-hidden">
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                Baru</span>
                            <img src={suzume} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0">
                            <img src={dino} alt="avatar"
                                className=" w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0">
                            <div className="group">
                                <img src={sonic} alt="avatar"
                                    className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                            </div>
                        </div>
                        <div className="relative shrink-0 group">
                            <div className="block transition-opacity duration-300 group-hover:opacity-0">
                                <span
                                    className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                    Baru</span>
                                <img src={area} alt="avatar"
                                    className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                            </div>
                            <div className="absolute top-0 left-0 hidden group-hover:block group-hover:scale-100 rounded-[20px] w-[408px] h-[460px] bg-[#181A1C] transition-opacity duration-300 z-10">
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
                                        <Dot size={40} />
                                        <p className="font-lato text-sm md:text-lg">KRIMINAL</p>
                                        <Dot size={40} />
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
                                className=" w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-[5px] cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={rio} alt="avatar"
                                className=" w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                    </div>
                    <button onClick="scrollContainer('scorlRating',300)"
                        className="hidden md:block absolute right-12 bottom-64 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowRight size={24} className="text-white" /></button>
                </section>
                <section className="relative py-5 px-10 md:px-20 space-y-10">
                    <h1 className="text-white text-xl md:text-3xl font-lato">Film Trending</h1>
                    <button onClick="scrollContainer('scrollFilm',-300)"
                        className="hidden md:block absolute left-12 bottom-64 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowLeft size={24} className="text-white" /></button>
                    <div id="scrollFilm" className="flex gap-7 overflow-x-auto overflow-y-hidden">
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={tomorrow} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={hero_one} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={guarden} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={eropa} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={duyung} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={korea_vertikal} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={hero} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                    </div>
                    <button onClick="scrollContainer('scrollFilm',300)"
                        className="hidden md:block absolute right-32 bottom-80 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowRight size={24} className="text-white" /></button>
                </section>
                <section className="relative py-5 px-10  md:px-20 space-y-10">
                    <h1 className="text-white text-xl md:text-3xl font-lato">Rilis Baru</h1>
                    <button onClick="scrollContainer('rilis',-300)"
                        className="hidden md:block absolute left-12 bottom-64 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowLeft size={24} className="text-white" /></button>
                    <div id="rilis" className="flex gap-7 overflow-x-auto overflow-y-hidden">
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={duyung} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                Baru</span>
                            <img src={duty} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <span
                                className="absolute text-white py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-1.5 md:right-12 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center">Top
                                10</span>
                            <img src={hero} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="relative shrink-0">
                            <span
                                className="absolute text-white bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md">Episode
                                Baru</span>
                            <img src={area} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <img src={missing} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <img src={spiderman} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                        <div className="shrink-0 relative">
                            <img src={fastFurios} alt="avatar"
                                className="w-32 h-60 md:w-[310px] md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                        </div>
                    </div>
                    <button onClick="scrollContainer('rilis',300)"
                        className="hidden md:block absolute right-32 bottom-80 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowRight size={24} className="text-white" /></button>
                </section>
            </main>
            {/* END MAIN */}
        </div>
    )
}
