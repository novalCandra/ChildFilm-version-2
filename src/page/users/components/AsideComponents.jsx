export default function AsideComponents({ reloadPage }) {
    return (
        <aside className="grid grid-cols-3 md:grid-cols-6 px-1 py-2 md:py-2 gap-3 md:gap-4">
            {reloadPage?.map((item) => (
                <div key={item.id} className="relative" data-aos="fade-up">
                    <span className="absolute top-3 left-1 px-1 rounded-[5px] py-1 font-lato text-md bg-[#0F1E93] text-white font-semibold text-[10px] md:text-base">{item.episodeBaru}</span>
                    <span
                        className="absolute text-white text-[0.8rem] w-6 md:w-9 md:text-base md:py-2 md:px-2 bg-[#B71F1D] right-0 md:right-12 cursor-pointer font-bold font-lato text-center rounded-bl-lg">{item.top}</span>
                    <img src={item.image} alt="fotoBlue" className="h-60 w-30 md:h-96 md:w-60 rounded-[5px]" />
                </div>
            ))}
        </aside>
    )
}
