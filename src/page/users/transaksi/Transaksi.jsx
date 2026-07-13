import { Check } from "lucide-react";
import BCAiMAGE from "../../../assets/bca.png"
import TimerComponents from "../components/TimerComponents";
export default function Transaksi() {
    return (
        <div className="bg-[#22282A] min-h-screen">
            <div className="flex flex-col px-5 md:px-10 py-10 space-y-6">
                {/* TIMER */}
                <TimerComponents />
                {/* END TIMER */}
                <h2 className="text-xl md:text-3xl font-lato text-white font-bold">Ringkasan Pembayaran</h2>
                <div className="flex flex-col md:flex-row space-x-3">
                    {/* card */}
                    <div className="flex flex-col w-full h-96 md:h-100 md:w-59 rounded-xl px-10 md:px-4 gap-24 bg-linear-to-r from-payment-start to-payment-end cursor-pointer duration-200 delay-200 hover:-translate-y-3">
                        <div className="flex flex-col md:w-50 md:h-200 py-10 space-y-5 justify-between">
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

                            <hr className="border border-gray-400 w-full md:w-52 mx-auto" />
                            <div className="flex flex-col justify-center items-center text-center space-y-3">
                                <button className="bg-white text-blue-700 rounded-2xl w-full md:w-47 h-10 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">Langganan</button>
                                <span className="text-xs font-lato text-white font-semibold">Syarat dan Ketentuan Berlaku</span>
                            </div>
                        </div>
                    </div>
                    {/* end card */}
                    {/* METODE PEMBAYARAN */}
                    <form className="flex flex-col space-y-3 w-full md:w-360 md:h-138 px-4">
                        <label htmlFor="metodePembayanran" className="text-white font-lato text-xl md:text-2xl">Metode Pembayaran</label>
                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="flex flex-row items-center md:h-16 w-full h-12 border border-white py-4 pl-3 pr-10 gap-3 rounded-md">
                                <input type="radio" name="money" id="bank" className="peer relative appearance-none w-5 h-5 rounded-full border border-white  focus:outline-none checked:bg-gray-600 hover:ring-gray-300 after:content-[''] after:w-full" />
                                <img src={BCAiMAGE} alt="bank" className="w-6 h-6 m bg-center bg-no-repeat rounded-full" />
                                <p className="font-lato text-gray-300 text-xs font-bold">BCA Virtual Account</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 justify-between items-baseline">
                            <p className="text-[#C1C2C4] font-lato font-semibold">Tanggal Pembelian</p>
                            <p className="text-white font-lato font-medium text-base">08 Juni 2023</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-between items-baseline">
                            <p className="text-[#C1C2C4] font-lato font-semibold">Kode Pembayaran</p>
                            <p className="text-white font-lato font-medium text-base">3KDJ5XFOV</p>
                        </div>

                        <span className="text-white font-lato text-md md:text-2xl">Ringkasan Transaksi</span>
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

                        <div className="flex flex-col space-y-5">
                            <span className="text-white font-lato text-xl md:text-2xl">Tata Cara Pembayaran</span>
                            <ol className="text-gray-500 list-decimal px-4 space-y-3 font-lato text-base">
                                <li>Buka aplikasi BCA Mobile Banking atau akses BCA Internet Banking.</li>
                                <li>Login ke akun Anda.</li>
                                <li>Pilih menu "Transfer" atau "Pembayaran".</li>
                                <li>Pilih opsi "Virtual Account" atau "Virtual Account Number".</li>
                                <li>Masukkan nomor virtual account dan jumlah pembayaran, lalu konfirmasikan pembayaran.</li>
                            </ol>
                        </div>

                        <button className="bg-primary-400 text-white font-lato w-20 h-10 md:w-24 md:h-10 py-2 rounded-[48px] cursor-pointer">Bayar</button>
                    </form>
                    {/* END METODE PEMBAYARAN */}
                </div>
            </div>
        </div>
    )
}
