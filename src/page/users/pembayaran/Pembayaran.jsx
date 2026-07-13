import { Check } from "lucide-react";
import BCAiMAGE from "../../../assets/bca.png"
import visaImage from "../../../assets/visa-svgrepo-com.svg"
import tokopediaImage from "../../../assets/tokopedia-svgrepo-com.svg"
export default function Pembayaran() {
    return (
        <div className="bg-[#22282A] min-h-screen">
            <main className="flex flex-col w-full md:h-230 gap-5 py-10 px-10 md:pt-1 md:px-20 justify-center">
                <h2 className="font-lato text-white text-xl md:text-3xl font-bold text-start">Ringkasan Pembayaran</h2>
                <div className="flex flex-col md:flex-row gap-5 md:w-full md:h-138">
                    <div className="flex flex-col w-87 h-96 md:h-100 md:w-59 rounded-xl px-10 md:px-5 gap-24 bg-linear-to-r from-payment-start to-payment-end cursor-pointer duration-200 delay-200 hover:-translate-y-3">
                        <div className="flex flex-col w-360px  md:w-50  md:h-200 py-10 space-y-5 justify-between">
                            <button className="bg-[#3D4142] w-27 h-10 px-2 py-2 text-white font-lato font-medium rounded-xl">Individual</button>
                            <p className="font-lato text-base text-white">Mulai dari Rp49,990/b ulan <br /> 1 Akun</p>
                            <div className="flex flex-col space-y-3">
                                <div className="flex flex-row gap-4 items-center">
                                    <Check size={20} className="text-white" /> <span className="text-white font-lato text-sm font-semibold">Tidak ada iklan</span>
                                </div>

                                <div className="flex flex-row gap-4 items-center">
                                    <Check size={20} className="text-white" /> <span className="text-white font-lato text-sm font-semibold">Tidak ada iklan</span>
                                </div>

                                <div className="flex flex-row gap-4 items-center">
                                    <Check size={20} className="text-white" /> <span className="text-white font-lato text-sm font-semibold">Tidak ada iklan</span>
                                </div>
                            </div>

                            <hr className="border border-gray-400 w-68 md:w-52 mx-auto" />
                            <div className="flex flex-col justify-center items-center text-center space-y-3">
                                <button className="bg-white text-blue-700 rounded-2xl w-47 h-10 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">Langganan</button>
                                <span className="text-xs font-lato text-white font-semibold">Syarat dan Ketentuan Berlaku</span>
                            </div>
                        </div>
                    </div>
                    {/* INPUTAN BANK DI PILIH */}
                    <form className="flex flex-col space-y-8 w-full md:w-360 md:h-138 px-6 py-10">
                        <label htmlFor="metodePembayanran" className="text-white font-lato text-xl md:text-2xl">Metode Pembayaran</label>
                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="flex flex-row items-center w-[320px] md:w-200 h-12 border border-white py-4 pl-3 pr-10 gap-3 rounded-md">
                                <input type="radio" name="money" id="" className="peer relative appearance-none w-4 h-4 rounded-full border border-white focus:outline-none checked:bg-gray-600 hover:ring-gray-300" />
                                <img src={visaImage} alt="bank" className="w-6 h-6 bg-center bg-no-repeat rounded-md" />
                                <img src={tokopediaImage} alt="bank" className="w-6 h-6 bg-center bg-no-repeat rounded-md" />
                                <p className="font-lato text-gray-300 text-xs font-bold">Kartu Debit/Kredit</p>
                            </div>
                            <div className="flex flex-row items-center w-[320px]  md:w-200 h-12 border border-white py-4 pl-3 pr-10 gap-3 rounded-md">
                                <input type="radio" name="money" id="bank" className="peer relative appearance-none w-4 h-4 rounded-full border border-white focus:outline-none checked:bg-gray-600 hover:ring-gray-300 after:content-[''] after:w-full" />
                                <img src={BCAiMAGE} alt="bank" className="w-6 h-6 bg-center bg-no-repeat rounded-full" />
                                <p className="font-lato text-gray-300 text-xs font-bold">BCA Virtual Account</p>
                            </div>
                        </div>

                        <label htmlFor="voucher" className="text-white font-lato text-xl md:text-2xl">Kode Voucher (Jika ada)</label>
                        <div className="flex flex-row gap-5 justify-between items-center w-80 md:w-full">
                            <input type="text" name="voucher" id="voucher" placeholder="Masukkan kode voucher" className="h-12 md:w-full border border-white py-4 pl-3 text-white rounded-md" />
                            <button className="bg-[#2F3334] text-white font-lato font-bold px-3 py-2 rounded-lg">Gunakan</button>
                        </div>

                        <span className="text-white font-lato text-xl md:text-2xl">Ringkasan Transaksi</span>
                        <div className="flex flex-col gap-4 w-full md:w-120">
                            <div className="flex flex-row gap-2 justify-between items-baseline">
                                <p className="text-[#C1C2C4] font-lato font-semibold">Paket Premium Individual</p>
                                <p className="text-white font-lato font-medium text-base">Rp49,000</p>
                            </div>
                            <div className="flex flex-row gap-2 justify-between items-baseline">
                                <p className="text-[#C1C2C4] font-lato font-semibold">Biaya Admin</p>
                                <p className="text-white font-lato font-medium text-base">Rp3,000</p>
                            </div>
                            <div className="flex flex-row gap-2 justify-between items-baseline">
                                <p className="text-[#C1C2C4] font-lato font-semibold">Total Pembayaran</p>
                                <p className="text-white font-lato font-semibold text-xl md:text-2xl">Rp52,000</p>
                            </div>
                            <button className="bg-primary-400 text-white font-lato w-20 h-10 md:w-24 rounded-[48px] cursor-pointer">Submit</button>
                        </div>


                    </form>
                </div>
                {/* end INPUTAN BANK DI PILIH */}

            </main >
        </div >
    )
}
