import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingScreenn from "../components/LoadingScree";
import gifLoading from "../assets/video_camp.svg"
import { useEffect, useState } from "react";
export default function LayoutLandingPage() {
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    if (loading) {
        return (
            <LoadingScreenn givLogo={gifLoading} />
        )
    }
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
