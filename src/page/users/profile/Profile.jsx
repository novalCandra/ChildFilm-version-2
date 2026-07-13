import ImageWarnings from "../../../assets/warning.png";
import ProfileImageUser from "../../../assets/provil.png"
import { FileUp, Pencil } from "lucide-react";
import AsideComponents from "../components/AsideComponents";
import { ConfligProfile } from "../../../config/ConfigProfile";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { schemaProfile } from "../../../schema/schema";
import { useEffect, useState } from "react";
export default function Profile() {
    const [ProfileImage, setProfileImage] = useState("");
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(schemaProfile),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        }
    })
    const onSubmit = (data) => {
        try {
            const dataJson = data;
            localStorage.setItem("profile", JSON.stringify(dataJson));
        } catch (error) {
            return console.error(error)
        }
    }
    Aos.init({
        duration: 1200,
        delay: 1000
    })

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) {
            console.log("tidak ada file error")
        };
        const reader = new FileReader();
        reader.onload = () => {
            const image = reader.result;
            setProfileImage(image);
            setValue("profile", image);
            localStorage.setItem("profile-image", image)
        }

        reader.readAsDataURL(file)
    }

    useEffect(() => {
        async function GetProfile() {
            try {
                const saved = localStorage.getItem("profile");
                const image = localStorage.getItem("profile-image");
                if (saved) {
                    const profile = JSON.parse(saved)
                    reset(profile)
                }
                if (image) {
                    setProfileImage(image)
                }
            } catch (error) {
                return console.error(error)
            }
        }
        GetProfile()

    }, [reset])
    return (
        <div className="bg-[#22282A] min-h-screen">
            <div className="flex flex-col md:flex-row-reverse md:justify-between px-4 py-10 md:px-25">
                <section className="flex flex-row py-5 px-5 md:w-139 md:h-48 h-64 bg-[#3D4142] rounded-xl gap-5">
                    <img src={ImageWarnings} alt="logo warning" className="w-78 md:w-30 h-25 md:h-20" />
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-lato text-white font-semibold text-xl text-start">Saat ini anda belum berlangganan</h2>
                        <p className="font-lato text-white font-[400px] text-base md:textlg">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
                        <div className="flex justify-end">
                            <button className="text-white font-lato font-bold bg-[#2F3334] text-md md:text-base rounded-[48px] w-50 h-9 "><Link to="/premium">Mulai Berlangganan</Link></button>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col pt-4">
                    <h2 className="font-lato text-white font-bold text-xl md:text-[32px]">Profil Saya</h2>
                    <div className="flex flex-col space-y-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-row gap-4 py-5 items-center">
                                <img src={ProfileImage || ProfileImageUser} alt="profile" className="w-20 h-20 md:w-35 md:h-35 rounded-full" />
                                <div className="flex flex-col space-y-1.5">
                                    <label htmlFor="image_profile" className="w-32 h-10 py-2 text-center rounded-[48px] border border-blue-700 text-primary-200 font-bold">Ubah Foto</label>
                                    <input type="file" name="image_profile" id="image_profile" accept="image/**" multiple style={{ display: "none" }} onChange={handleImageChange} />
                                    <div className="flex flex-row gap-2 w-40">
                                        <FileUp size={24} className="text-gray-500" />
                                        <span className="text-white font-lato font-semibold">Maksimal 2MB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 items-center relative">
                                <label htmlFor="username" className=" absolute text-white font-semibold font-lato left-10 md:left-4">Nama Pengguna</label>
                                <input type="text" name="username" id="username" className="text-white bg-[#22282a1a] font-lato w-90 md:w-240 h-14 pt-5 rounded-md px-5 border-2 border-gray-400 text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:invalid:ring-red-900 invalid:text-red-800 invalid:bg-red-400" placeholder="Masukan Nama" {...register('username')} />
                                <Pencil size={24} className="absolute text-white right-10 top-5 md:left-230 md:top-5" />
                                {errors.username?.message && <p className="text-red-500 font-lato font-semibold absolute left-5 md:left-0 top-15">{errors.username?.message}</p>}
                                <label htmlFor="email" className=" absolute text-white font-semibold font-lato top-25 left-10 md:left-4 md:top-25">Email</label>
                                <input type="email" name="email" id="email" className="text-gray-400 bg-[#22282a1a] font-lato w-90 md:w-240 h-14 pt-5 rounded-md px-5 border-2 border-gray-400 text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:invalid:ring-red-900 invalid:text-red-800 invalid:bg-red-400" placeholder="Masukan Email" {...register('email')} />
                                <Pencil size={24} className="absolute text-white right-10 top-29 md:left-230 md:top-28" />
                                {errors.email?.message && <p className="text-red-500 font-semibold font-lato absolute left-5 md:left-0 top-40">{errors.email?.message}</p>}
                                <label htmlFor="password" className="absolute text-white font-semibold font-lato left-10 top-49 md:left-4 md:top-49">Kata Sandi</label>
                                <input type="password" name="password" id="password" className="text-white bg-[#22282a1a] font-lato w-90 md:w-240 h-14 pt-5 rounded-md px-5 border-2 border-gray-400 text-xl focus:invalid:ring-red-900 invalid:text-red-800 invalid:bg-red-400" {...register('password')} placeholder="Masukan Password" />
                                <Pencil size={24} className="absolute text-white right-10 top-53 md:left-230 md:top-52" />
                                {errors.password?.message && <p className="text-red-500 font-semibold font-lato absolute left-5 md:left-0 top-63">{errors.password?.message}</p>}
                            </div>
                            <button type="submit" className="hidden md:block bg-primary-200 text-white w-26 h-10 rounded-xl mt-10">Simpan</button>
                        </form>
                    </div>
                </section>
            </div>
            <main className="px-6 md:px-25">
                <h2 className="font-lato text-white text-xl md:text-[32px]">Daftar Saya</h2>
                <AsideComponents reloadPage={ConfligProfile.data} />
            </main>
        </div>
    )
}
