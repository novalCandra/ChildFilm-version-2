import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function CardPembayaran({ textButton, deskripsi, account, reloadDeskripsi, textButtonLangganan, deskripsiCard, path }) {
    return (
        <div className="flex flex-col w-59 h-96 rounded-xl px-4 gap-24 bg-linear-to-r from-payment-start to-payment-end cursor-pointer duration-200 delay-200 hover:-translate-y-3">
            <div className="flex flex-col w-50 h-51 py-10 space-y-5">
                <button className="bg-[#3D4142] w-27 h-10 px-2 py-2 text-white font-lato font-medium rounded-xl">{textButton}</button>
                <p className="font-lato text-base text-white">{deskripsi} <br /> {account}</p>
                <div className="flex flex-col space-y-3">
                    {reloadDeskripsi?.map((item,) => (
                        <div key={item.id} className="flex flex-row gap-4 items-center">
                            <Check size={20} className="text-white" /> <span className="text-white font-lato text-sm font-semibold">{item.deskripsiCheck}</span>
                        </div>
                    ))}
                </div>

                <hr className="border border-gray-400 w-47 mx-auto" />
                <div className="flex flex-col justify-center items-center text-center space-y-3">
                    <button className="bg-white text-blue-700 rounded-2xl w-47 h-10 font-semibold"><Link to={path} >{textButtonLangganan}</Link></button>
                    <span className="text-xs font-lato text-white font-semibold">{deskripsiCard}</span>
                </div>
            </div>
        </div>
    )
}
