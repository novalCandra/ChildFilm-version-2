import { Check, CirclePlay, Gauge, Menu, MessageSquareText, Minimize, MoveLeft, Pause, PauseCircle, Play, SkipForward, Volume2, VolumeX } from "lucide-react"
import videoPage from "../../../assets/video/video_testing.mp4";
import ImageVscode from "../../../assets/foto_episode.png";
import { useHookVideoPlay } from "../hook/useVideo";
export default function VideoKomponents() {
    const { play, music, handleMusic, handlePlayVideo, kecepatan, language, menuEpisode, modalEpisodeNew, modalKecepatan, modalLanguage, modalSkipVideo, skipVideo, videoPlay, setPlay } = useHookVideoPlay()
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="relative w-full max-w-300 mx-auto">
                <video ref={videoPlay} src={videoPage} className="relative aspect-video border-none" onPlay={() => setPlay(true)} onPause={() => setPlay(false)} >
                    <source src={videoPage} type="video" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                    <button type="button" onClick={handlePlayVideo}>
                        {play ? <PauseCircle size={50} className="text-gray-300 opacity-10" /> : <CirclePlay size={50} className="text-gray-300" />}
                    </button>
                </div>

                <div className="absolute right-2 top-45 md:right-5 md:top-140">
                    <button type="button" className="bg-white text-black font-lato text-sm md:text-base rounded-full px-3 py-1 md:px-6 md:py-1.5">
                        Lewati Intro
                    </button>
                </div>
                <div className="bg-[#181A1C99] absolute -bottom-1 md:bottom-0 left-1/2 md:left-150 -translate-x-1/2 flex flex-row  w-full items-center py-1.5 px-3 md:py-4 md:px-5 justify-between rounded-md">
                    {/* LEFT */}
                    <div className="flex space-x-2 md:space-x-4">
                        <button type="button" onClick={handlePlayVideo}>
                            {play ? <Pause size={18} className="text-white md:size-6" /> : <Play size={18} className="text-white md:size-6" />}
                        </button>
                        <SkipForward size={18} className="text-white md:size-6" />
                        <button type="button" onClick={handleMusic}>
                            {music ? <Volume2 size={18} className="text-white" /> : <VolumeX size={18} className="text-white" />}
                        </button>
                        {/* END LEFT */}
                    </div>
                    {/* center */}
                    <div className="flex flex-row text-center">
                        <p className="font-lato text-[10px] md:text-xl text-white truncate max-w-22.5 md:max-w-none">EPISODE FILM BARU</p>
                    </div>
                    {/* end center */}
                    {/* RIGHT */}
                    <div className="flex space-x-2 md:space-x-5 items-center relative">
                        <button type="button" onClick={modalSkipVideo}>
                            <SkipForward size={18} className="text-white md:size-6" />
                        </button>
                        {skipVideo && (
                            <div className="absolute bottom-full mb-2 right-0 flex flex-col w-[85vw] max-w-100 z-10">
                                <div className="bg-[#3D4142] py-2 px-2">
                                    <h2 className="font-lato text-white text-sm md:text-base">EPISODE BARU</h2>
                                </div>
                                <div className="bg-[#22282A] px-2 py-3 flex flex-row gap-2">
                                    <img src={ImageVscode} alt="foto" className="w-24 h-18 md:w-32 md:h-24 rounded-[10px] bg-center bg-repeat bg-cove shrink-0" />
                                    <div className="flex flex-col">
                                        <h4 className="text-white font-lato text-sm md:text-md">EPISODE 2 : Bitcuis</h4>
                                        <p className="line-clamp-3 font-lato text-xs md:text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus corporis libero non repellat vero mollitia ea nam, dolore magni saepe ab exercitationem quaerat aperiam sed quos consectetur rem? Enim.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button type="button" onClick={modalEpisodeNew}>
                            <Menu size={18} className="text-white md:size-6" />
                        </button>
                        {menuEpisode && (
                            <div className="absolute bottom-full mb-2 right-0  flex flex-col w-[90vw] max-w-112.5 max-h-75 overflow-y-auto px-2 z-10">
                                <div className="bg-[#3D4142] sticky py-2 px-2 top-0">
                                    <div className="flex flex-row items-center gap-2">
                                        <a href="#" className="block"><MoveLeft size={18} className="text-white" /></a>
                                        <p className="font-lato text-white text-sm md:text-md">EPISODE SELANJUT NYA</p>
                                    </div>
                                </div>
                                <div className="bg-[#3D4142] py-2.5 space-y-3.5">
                                    <div className="flex flex-row px-2">
                                        <p className="font-lato text-white text-sm md:text-md">Episode 1</p>
                                    </div>
                                    <div className="flex flex-col bg-[#22282A] py-1.5 px-2 space-y-2">
                                        <p className="font-lato text-white text-base md:text-md">Episode 2</p>
                                        <div className="flex flex-row space-x-2.5">
                                            <img src={ImageVscode} alt="foto" className="w-30 h-20 md:w-40 md:h-28 rounded-[5px] bg-center bg-repeat bg-cover shrink-0" />
                                            <div className="flex flex-col">
                                                <h4 className="text-white font-lato text-md">Bitcuis</h4>
                                                <p className="line-clamp-3 font-lato text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus corporis libero non repellat vero mollitia ea nam, dolore magni saepe ab exercitationem quaerat aperiam sed quos consectetur rem? Enim.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row px-2">
                                        <p className="font-lato text-white text-sm md:text-md">Episode 3</p>
                                    </div>
                                    <div className="flex flex-row px-2">
                                        <p className="font-lato text-white text-sm md:text-md">Episode 4</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button type="button" onClick={modalLanguage} className="cursor-pointer">
                            <MessageSquareText size={18} className="text-white md:size-6" />
                        </button>
                        {language && (
                            <div className="absolute bottom-full mb-2 right-0 z-10">
                                <div className="flex flex-row bg-[#22282A]/90 w-[80vw] max-w-[384px] h-27 justify-between rounded-md">
                                    <div className="flex flex-col py-2 px-2 space-y-2 min-w-0">
                                        <h4 className="font-lato tex-sm md:text-md text-white">Audio</h4>
                                        <ul className="space-y-2 font-lato text-white cursor-pointer">
                                            <li className="font-lato text-xs flex flex-row md:text-md truncate gap-1 items-center"><Check size={18} className="shrink-0" /><p className="font-lato text-xs md:text-base truncate">Bahasa Indonesia</p></li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col py-2 px-2 space-y-2 min-w-0">
                                        <h4 className="font-lato text-sm md:text-md text-white">Terjemahan</h4>
                                        <ul className="space-y-2 font-lato text-white cursor-pointer">
                                            <li className="text-sm md:text-base flex flex-row items-center gap-1"><Check size={18} /><p className="font-lato text-xs md:text-base truncate">Bahasa English</p></li>
                                            <li className="text-sm md:text-base flex flex-row items-center gap-1"><Check size={18} /><p className="font-lato text-xs md:text-base truncate">Bahasa Indonesia</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button type="button" onClick={modalKecepatan} className="cursor-pointer text-white">
                            <Gauge size={18} className="text-white md:size-6" />
                        </button>
                        {kecepatan && (
                            <div className="absolute bottom-full mb-2 right-0 py-2 px-4 bg-[#22282A] rounded-[5px] cursor-pointer text-white font-lato text-start z-10 min-w-[140px]">
                                <h3 className="font-lato text-xs md:text-base">KECEPATAN</h3>
                                <ul className="text-xs md:text-base space-y-1 mt-1">
                                    <li value={"0.5"} className="hover:text-blue-400 font-lato">0.5x</li>
                                    <li value={"0.75"} className="hover:text-blue-400 font-lato">0.75x</li>
                                    <li value={"1"} className="text-blue-400 font-lato">1x (Normal)</li>
                                    <li value={"1.25"} className="hover:text-blue-400 font-lato">1.25x</li>
                                    <li value={"1.5"} className="hover:text-blue-400 font-lato">1.5x</li>
                                </ul>
                            </div>
                        )}
                        <Minimize size={18} className="text-white md:size-6" />
                    </div>
                    {/* end RIGHT */}
                </div>
            </div>
        </div>
    )
}
