import { Download } from "lucide-react";
import Hd from "../../../assets/video-4k-box.png"
import rollFilm from "../../../assets/movie-roll.svg"
import notIkllan from "../../../assets/advertisements-off.svg"
import CardPembayaran from "../../../components/CardPembayaran";
import message from "../../../assets/message-reply-text.svg";
import table from "../../../assets/tablet-cellphone.svg";
import { configPembayaran, configPembayaranBerdua, configPembayaranKeluarga } from "../../../config/ConfigCardPembayaran";
export default function langganan() {
    return (
        <div className="bg-[#22282A] min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <main className="w-[320px] md:w-360 h-87 md:h-96 pt-21.5 text-center">
                    <h1 className="font-lato text-white text-xl  md:text-2xl font-bold">Kenapa Harus Berlangganan?</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:w-7xl md:h-70 md:ml-50 md:pt-10">
                        <span className="flex flex-col items-center justify-center w-40 h-23 gap-4">
                            <Download size={12} className="text-white shrink-0 size-7 md:size-12" />
                            <p className="font-lato text-white">Download Kontent</p>
                        </span>
                        <span className="flex flex-col items-center justify-center w-40 h-23 gap-4">
                            <img src={notIkllan} alt="foto no iklan" className="w-7  md:w-12" />
                            <p className="font-lato text-white">Tidak Ada Iklan</p>
                        </span>
                        <span className="flex flex-col items-center justify-center w-40 h-23 gap-4">
                            <img src={rollFilm} alt="Foto roll" className="w-7  md:w-12" />
                            <p className="font-lato text-white">Tonton Semua Konten</p>
                        </span>
                        <span className="flex flex-col items-center justify-center w-40 h-23 gap-4">
                            <img src={Hd} alt="foto HD" className="w-7  md:w-12" />
                            <p className="font-lato text-white">Kualitas Maksimal
                                Sampai Dengan 4K</p>
                        </span>
                        <span className="flex flex-col items-center justify-center w-40 h-23 gap-4">
                            <img src={table} alt="foto HD" className="w-7 md:w-12" />
                            <p className="font-lato text-white">Tonton di Tv, Tablet,
                                Mobile, dan Laptop</p>
                        </span>
                        <span className="flex flex-col items-center justify-center w-40 h-23  gap-4">
                            <img src={message} alt="foto HD" className="w-7 mt-4 md:mt-0 md:w-12" />
                            <p className="font-lato text-white">Subtitle Untuk Konten
                                Pilihan</p>
                        </span>
                    </div>
                </main>
                <main className="w-[320px] md:w-full h-370 md:h-140 bg-[#2F3334] mt-16 rounded-md mb-4">
                    <div className="flex flex-col py-10 px-10 text-center">
                        <h2 className="text-white font-lato text-xl md:text-2xl font-bold">Pilih Paketmu</h2>
                        <p className="text-white font-lato text-sm md:text-xl font-medium">Temukan paket sesuai kebutuhanmu!</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-20 items-center">
                        <CardPembayaran textButton={configPembayaran.textButton} account={configPembayaran.account} deskripsi={configPembayaran.deskripsi} deskripsiCard={configPembayaran.deskripsiCard} textButtonLangganan={configPembayaran.textButtonLangganan} reloadDeskripsi={configPembayaran.reloadDeskripsi} path={configPembayaran.path} />
                        <CardPembayaran textButton={configPembayaranBerdua.textButton} account={configPembayaranBerdua.account} deskripsi={configPembayaranBerdua.deskripsi} deskripsiCard={configPembayaranBerdua.deskripsiCard} textButtonLangganan={configPembayaranBerdua.textButtonLangganan} reloadDeskripsi={configPembayaranBerdua.reloadDeskripsi} path={configPembayaranBerdua.path} />
                        <CardPembayaran textButton={configPembayaranKeluarga.textButton} account={configPembayaranKeluarga.account} deskripsi={configPembayaranKeluarga.deskripsi} deskripsiCard={configPembayaranKeluarga.deskripsiCard} textButtonLangganan={configPembayaranKeluarga.textButtonLangganan} reloadDeskripsi={configPembayaranKeluarga.reloadDeskripsi} path={configPembayaranKeluarga.path} />
                    </div>
                </main>
            </div>
        </div>
    )
}
