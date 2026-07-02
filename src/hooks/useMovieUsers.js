import { useEffect, useState } from "react"
import getstartFilm, { getRatingFilm } from "../service/movieService";

export const useHookMovies = () => {
    const [startFilm, setStartFilm] = useState([]);
    const [ratingFilm, setRatingFilm] = useState([]);
    const [trendingFilm, setTrendingFilm] = useState([]);
    const [startRilis, setStartRilis] = useState([]);

    useEffect(() => {
        const handleApiHookMoveies = () => {
            try {
                const [startFilmData, ratingFilmData, trendingFilmFData] = new Promise.all([
                    getstartFilm(),
                    getRatingFilm()
                ])
                setStartFilm(startFilmData)
                setRatingFilm(ratingFilmData)
                setStartRilis(trendingFilmFData)
                setTrendingFilm(trendingFilmFData)
            } catch (error) {
                return console.log(error)
            }
        }
        handleApiHookMoveies()
    })

    return { startFilm, ratingFilm, trendingFilm, startRilis }
}