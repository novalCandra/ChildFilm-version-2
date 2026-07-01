import { useRef, useState } from "react";

export const useHookVideoPlay = () => {
    const [play, setPlay] = useState(false)
    const [music, setMusic] = useState(true)
    const [language, setlanguage] = useState(false);
    const [skipVideo, setSkipVideo] = useState(false);
    const [kecepatan, setKecepatan] = useState(false);
    const [menuEpisode, setMenuEpisode] = useState(false);
    const videoPlay = useRef(null)
    function handlePlayVideo() {
        const nextPlayVideo = !play
        setPlay(prev => !prev)
        if (nextPlayVideo) {
            videoPlay.current.play();
        } else {
            videoPlay.current.pause()
        }
    }
    function handleMusic() {
        if (!videoPlay.current) return;
        const nextMusic = !music;
        setMusic(nextMusic);
        videoPlay.current.muted = !nextMusic;
    }

    function modalKecepatan() {
        setKecepatan(prev => !prev)
    }

    function modalLanguage() {
        setlanguage(prev => !prev)
    }
    function modalSkipVideo() {
        setSkipVideo(prev => !prev)
    }
    function modalEpisodeNew() {
        setMenuEpisode(prev => !prev)
    }

    return { play, music, language, skipVideo, kecepatan, menuEpisode, videoPlay, handlePlayVideo, handleMusic, modalKecepatan, modalLanguage, modalSkipVideo, modalEpisodeNew, setPlay }
}