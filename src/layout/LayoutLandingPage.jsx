import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoadingScreen } from "../hooks/useLoadingScreen";
import LoadingScreenn from "../components/LoadingScree";
import gitloading from "../assets/video_camp.svg"
import { ConfigFooter, ConfigNavbar } from "../config/ConfigLandingPage";
export default function LayoutLandingPage() {
    const loading = useLoadingScreen();

    if (loading) {
        return <LoadingScreenn givLogo={gitloading} />
    }
    return (
        <>
            <Navbar LogoPngDekstop={ConfigNavbar.LogoPngDekstop} LogoPngMobile={ConfigNavbar.LogoPngMobile} LogoProvile={ConfigNavbar.logoProvile} mapNavbar={ConfigNavbar.listNavbar} mapNavbarMenu={ConfigNavbar.menuList} />
            <Outlet />
            <Footer imageLogoDekstop={ConfigFooter.imageLogoDekstop} headingFooter={ConfigFooter.headingFooter} listHeadingOne={ConfigFooter.listHeadingOne} listHeadingTwo={ConfigFooter.listHeadingTwo} mapListOne={ConfigFooter.reloadLisOne} mapsListTwo={ConfigFooter.reloadLisTwo} mapsListThre={ConfigFooter.reloadLisThreee} mapsFour={ConfigFooter.reloadLisFour} mapsFive={ConfigFooter.reloadListFive} />
        </>
    )
}
