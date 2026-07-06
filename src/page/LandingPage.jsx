import "aos/dist/aos.css"
import HeaderLandingPage from "../components/HeaderLandingPage";
import { ConfigHeaderLanding } from "../config/ConfigLandingPage";
import { dataDumyFilmTrending, dataDumyRilisBaru, dataDumyTopRating, dataFilmLanjutan } from "../data/DataDumy";
import AsideComponents from "../components/AsideComponents";
import AsideComponentsTwo from "../components/AsideComponentsTwo";
import { useMovierUsers } from "../hooks/useMovieUsers";
export default function LandingPage() {
    const {scrollRefFilm, scrollRefRating, scrollRefRilis, scrollReTrending, handleHover, handleLeave } = useMovierUsers()
    return (
        <div className="bg-[#22282A]">
            {/* HERO */}
            <HeaderLandingPage heading={ConfigHeaderLanding.heading} deskripsi={ConfigHeaderLanding.deskripsi} deskripsiButtonOne={ConfigHeaderLanding.deskripsiButtonOne} deskripsiButtonTwo={ConfigHeaderLanding.deskripsiButtonTwo} deskripsiButtonThree={ConfigHeaderLanding.deskripsiButtonThree} />
            {/* END hero */}
            {/* MAIN */}
            <main className="relative">
                <AsideComponentsTwo HeadingAside={"Melanjutkan Tonton Film"} reloadMapData={dataFilmLanjutan} scrollRef={scrollRefFilm} scrollRefRight={scrollRefFilm} scrollRefLeft={scrollRefFilm} handleHoverProps={handleHover} handleLeaveProps={handleLeave} handlePropsHover={handleHover} handlePropsLeave={handleLeave} />
                <AsideComponents HeadingAside={"Top Rating Film dan Series Hari ini"} reloadMapping={dataDumyTopRating} scrollRef={scrollRefRating} scrollRefRight={scrollRefRating} handleHoverProps={handleHover} scrollRefLeft={scrollRefRating} handleLeaveProps={handleLeave} />
                <AsideComponents HeadingAside={"Film Trending"} reloadMapping={dataDumyFilmTrending} scrollRef={scrollReTrending} scrollRefLeft={scrollReTrending} scrollRefRight={scrollReTrending} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
                <AsideComponents HeadingAside={"RILIS BARU"} reloadMapping={dataDumyRilisBaru} scrollRef={scrollRefRilis} scrollRefLeft={scrollRefRilis} scrollRefRight={scrollRefRilis} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
            </main>
            {/* END MAIN */}
        </div >
    )
}
