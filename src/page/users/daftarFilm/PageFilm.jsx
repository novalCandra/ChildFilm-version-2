import AsideComponents from "../../../components/AsideComponents";
import AsideComponentsTwo from "../../../components/AsideComponentsTwo";
import HeaderLandingPage from "../../../components/HeaderLandingPage";
import { ConfigAsideFilm, ConfigFilmPersembahan, ConfigFilmRilis, ConfigFilmSeries, ConfigFilmTrending, ConfigHeaderFilm } from "../../../config/ConfigFilm";
import { useMovierUsers } from "../../../hooks/useMovieUsers";

export default function PageFilm() {
    const { scrollRefRilis, scrollReTrending, scrollRefRating, scrollRefFilm, handleHover, handleLeave } = useMovierUsers()
    return (
        <div className="bg-[#22282A]">
            <HeaderLandingPage heading={ConfigHeaderFilm.heading} deskripsi={ConfigHeaderFilm.deskripsi} deskripsiButtonOne={ConfigHeaderFilm.deskripsiButtonOne} deskripsiButtonThree={ConfigHeaderFilm.deskripsiButtonThree} deskripsiButtonTwo={ConfigHeaderFilm.deskripsiButtonTwo} />
            <main className="relative">
                <AsideComponentsTwo HeadingAside={ConfigAsideFilm.headingAside} reloadMapData={ConfigAsideFilm.data} />
                <AsideComponents HeadingAside={ConfigFilmPersembahan.headingAside} reloadMapping={ConfigFilmPersembahan.data} scrollRef={scrollRefRating} scrollRefRight={scrollRefRating} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
                <AsideComponents HeadingAside={ConfigFilmSeries.headingAside} reloadMapping={ConfigFilmSeries.data} scrollRef={scrollRefFilm} scrollRefRight={scrollRefFilm} scrollRefLeft={scrollRefFilm} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
                <AsideComponents HeadingAside={ConfigFilmTrending.headingAside} reloadMapping={ConfigFilmTrending.data} scrollRef={scrollReTrending} scrollRefRight={scrollReTrending} scrollRefLeft={scrollReTrending} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
                <AsideComponents HeadingAside={ConfigFilmRilis.headingAside} reloadMapping={ConfigFilmRilis.data} scrollRef={scrollRefRilis} scrollRefLeft={scrollRefRilis} scrollRefRight={scrollRefRilis} handleHoverProps={handleHover} handleLeaveProps={handleLeave} />
            </main>
        </div>
    )
}
