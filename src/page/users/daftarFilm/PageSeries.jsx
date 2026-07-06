import AsideComponents from '../../../components/AsideComponents'
import AsideComponentsTwo from '../../../components/AsideComponentsTwo'
import HeaderLandingPage from '../../../components/HeaderLandingPage'
import { ConfigheaderSeries } from '../../../config/ConfigSeries'
import { dataDumyFilmTrending, dataDumyRilisBaru, datadumySeriesFilm, dataDumyTopRating, dataFilmLanjutan } from '../../../data/DataDumy'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
export default function PageSeries() {
    useEffect(() => {
        Aos.init({ duration: 1200, delay: 100 })
        Aos.refresh()
    }, [])
    return (
        <div className='bg-[#22282A]'>
            <HeaderLandingPage heading={ConfigheaderSeries.heading} deskripsi={ConfigheaderSeries.deskripsi} deskripsiButtonOne={ConfigheaderSeries.deskripsiButtonOne} deskripsiButtonTwo={ConfigheaderSeries.deskripsiButtonTwo} deskripsiButtonThree={ConfigheaderSeries.deskripsiButtonThree} genre={ConfigheaderSeries.genre} />
            <main className='relative'>
                <AsideComponentsTwo HeadingAside={"Melanjutkan Tonton Series"} reloadMapData={dataFilmLanjutan} />
                <AsideComponents HeadingAside={"Series Persembahan Chill"} reloadMapping={datadumySeriesFilm.data} />
                <AsideComponents HeadingAside={"Top Rating Series Hari ini"} reloadMapping={dataDumyTopRating} />
                <AsideComponents HeadingAside={"Series Trending"} reloadMapping={dataDumyFilmTrending} />
                <AsideComponents HeadingAside={"Rilis baru"} reloadMapping={dataDumyRilisBaru} />
            </main>
        </div>
    )
}
