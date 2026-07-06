import { ArrowLeft, ArrowRight, Check, ChevronDown, Dot, Play } from "lucide-react";

export default function AsideComponents({ HeadingAside, reloadMapping, scrollRef, scrollRefLeft, scrollRefRight, handleHoverProps, handleLeaveProps }) {
    const scroll = (ref, amount) => {
        ref?.current.scrollBy({
            left: amount,
            behavior: "smooth"
        })
    }
    return (
        <section className="relative py-5 px-10  md:px-20 space-y-10" data-aos="fade-up">
            <h1 className="text-white text-xl md:text-3xl font-lato">{HeadingAside}</h1>
            <button type="button" onClick={() => scroll(scrollRefLeft, -300)}
                className="hidden md:block absolute left-12 bottom-64 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowLeft size={24} className="text-white" /></button>
            <div id="rilis" ref={scrollRef} className="flex gap-7 overflow-x-auto scrollbar overflow-y-hidden relative" data-aos="fade-up">
                {reloadMapping?.map((item) => {
                    const badgeConfigs = [
                        {
                            text: item.spesialDeksripsi,
                            className: "py-0.1 px-1 md:py-2 md:px-2 w-8 md:w-12 bg-[#B71F1D] right-0 md:-right-1 top-0 rounded-br-lg cursor-pointer font-bold font-lato text-center"
                        },
                        {
                            text: item.populer,
                            className: "bg-[#0F1E93] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-36 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md"
                        },
                        {
                            text: item.series,
                            className: "bg-[#B7A207] px-1 rounded-[10px] py-1 md:px-2 md:py-2 left-2.5 top-6 md:w-24 md:rounded-[20px] cursor-pointer font-bold font-lato text-center text-sm md:text-md"
                        }
                    ].filter((badge) => Boolean(badge.text));

                    return (
                        <div key={item.id} onMouseEnter={handleHoverProps} onMouseLeave={handleLeaveProps} className="shrink-0 relative group">
                            <div className="block relative transition-opacity duration-300 group-hover:opacity-0">
                                {badgeConfigs.map((badge) => (
                                    <span
                                        key={badge.text}
                                        className={`absolute text-white ${badge.className}`}>
                                        {badge.text}
                                    </span>
                                ))}
                                <img src={item.image} alt="avatar"
                                    className="w- h-60 md:w-77.5 md:h-full bg-center bg-repeat bg-cover rounded-2xl" />
                            </div>
                            <div className="absolute top-0 left-0 hidden group-hover:block group-hover:scale-100 rounded-[20px] w-100 h-116 bg-[#181A1C] transition-opacity duration-300 z-10">
                                <img src={item.imageHover} alt="suzume" className="rounded-t-[20px] h-63.75 w-102" />
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
                    )
                })}
            </div>
            <button type="button" onClick={() => scroll(scrollRefRight, 300)}
                className="hidden md:block absolute right-12 bottom-73 px-2 py-2 rounded-full bg-[#2F3334] z-10"><ArrowRight size={24} className="text-white" /></button>
        </section>
    )
}