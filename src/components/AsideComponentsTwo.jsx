import { ArrowLeft, ArrowRight, Check, ChevronDown, Dot, Play, Star } from "lucide-react"
import { useMovierUsers } from "../hooks/useMovieUsers"
export default function AsideComponentsTwo({ HeadingAside, reloadMapData, scrollRefLeft, scrollRefRight, scrollRef }) {
    const { popup, handleHover, handleLeave } = useMovierUsers()
    return (
        <section className="relative py-5 px-10 md:py-10 md:px-20 space-y-10" data-aos="fade-up">
            <h2 className="text-white text-xl md:text-3xl font-lato">{HeadingAside}</h2>
            <button onClick={() => scroll(scrollRefLeft, -300)}
                className="hidden md:block absolute left-16 bottom-32 px-2 py-2 rounded-full bg-[#2F3334] z-10 cursor-pointer"><ArrowLeft size={24} className="text-white" /></button>
            <div id="film" ref={scrollRef} className="flex gap-7 space-y-5 overflow-x-auto scrollbar transition overflow-y-hidden">
                {reloadMapData?.map((item) => (
                    <div key={item.id} onMouseEnter={handleHover} onMouseLeave={handleLeave} className="shrink-0 group">
                        <div className="relative transition duration-200 group-hover:opacity-0">
                            <span
                                className={`absolute text-white ${item.populer ? "bg-primary-300 px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md" : "px-0 py-0 h-0 w-0"}`}>
                                {item.populer}</span>
                            <img src={item.image} alt="avatar"
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
                            <div className="absolute top-0 left-0 scale-95 pointer-events-none duration-200 w-80 md:w-102 md:h-115 z-999 bg-[#181A1C] rounded-[20px] opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto" style={{ left: popup.x, top: 100 }}>
                                <img src={item.imageHover} alt="suzume" className="rounded-t-[20px] bg-center bg-repeat bg-cover w-100 h-50 md:h-63.5 md:w-102" />
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
                ))}
            </div>
            <button onClick={() => scroll(scrollRefRight, 300)}
                className="hidden md:block absolute right-16 bottom-36 px-2 py-2 rounded-full bg-[#2F3334] -translate-y-1/2"><ArrowRight size={24} className="text-white" /></button>
        </section>
    )
}
