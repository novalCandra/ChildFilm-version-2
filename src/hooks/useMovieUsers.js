import { useEffect, useRef, useState } from "react"
import Aos from "aos";
import "aos/dist/aos.css"
export const useMovierUsers = () => {
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

    return { popup, scrollRefFilm, scrollRefRating, scrollRefRilis, scrollReTrending, handleHover, handleLeave }
}