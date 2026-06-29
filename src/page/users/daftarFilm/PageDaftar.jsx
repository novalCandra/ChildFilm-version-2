import { dataDumyDaftar } from "../../../data/DataDumy"
import AsideComponents from "../components/AsideComponents"
export default function PageDaftar() {
    return (
        <main className="bg-[#22282A] min-h-screen">
            <section className="px-3 pt-10 md:p-20 md:py-30 space-y-3.5 w-full">
                <h1 className="font-lato text-white font-bold text-xl md:text-3xl">DAFTAR SAYA</h1>
                <AsideComponents reloadPage={dataDumyDaftar.data} />
            </section>
        </main>
    )
}
