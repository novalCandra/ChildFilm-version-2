export default function AsideComponents({ reloadPage }) {
    return (
        <aside className="grid grid-cols-3 md:grid-cols-6 px-1 py-2 md:py-2 gap-5 md:gap-4">
            {reloadPage?.map((item) => {
                return (
                    <div key={item.id} className="relative" data-aos="fade-up">
                        <span className={`absolute ${item.episodeBaru ? "top-3 left-1 md:left-2.5 px-1 py-1 md:px-2 rounded-[10px] md:rounded-3xl md:py-2 font-lato text-md bg-primary-300 text-white font-semibold text-[10px] md:text-base" : "px-0 w-0 py-0 h-0"}`}>{item.episodeBaru}</span>
                        <span
                            className={`absolute text-white text-[0.8rem] ${item.top ? "w-6 md:w-9 md:text-base md:py-2 md:px-2 bg-[#B71F1D] right-0 md:right-9 cursor-pointer font-bold font-lato text-center rounded-bl-lg" : "px-0 py-0 h-0 w-0"}`}>{item.top}</span>
                        <img src={item.image} alt="fotoBlue" className="h-60 w-30 md:h-96 md:w-60 rounded-[5px]" />
                    </div>
                )
            })}
        </aside>
    )
}
