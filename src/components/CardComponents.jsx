import { data, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function CardComponents({ title, deskripsi, deskripsiText, linkTwo, textButton, link, imageLogo, imageLogoGoogle }) {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = () => {
        console.log(data)
    }
    return (
        <div className="flex flex-col space-y-6 w-full md:w-140 px-5 md:px-10 py-5 md:py-10 bg-[#22282A]/40 rounded-xl backdrop-blur-2xl">
            <div className="justify-center items-center mx-auto">
                <img src={imageLogo} alt="Foto Logo" className="w-32 items-center justify-center" />
            </div>
            <div className="space-y-3 md:space-y-3">
                <h2 className="text-xl md:text-3xl text-white text-center font-bold">{title}</h2>
                <p className="text-md md:text-md text-white text-center">{deskripsi}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col -mt-5 space-y-2 md:px-5 w-85 md:w-600 max-w-md mx-auto">
                <label htmlFor="username" className="text-white text-md  md:text-lg">Username</label>
                <input id="username" type="text" name="username" placeholder="Masukan username"
                    className="w-full rounded-2xl border-2 border-white px-3 py-2 text-white" {...register("username", { required: true })} />
                {errors.username && <p className="text-red-500 text-md">username wajib diisi</p>}
                <label htmlFor="password" className="text-white text-md  md:text-lg">Kata Sandi</label>
                <input type="password" name="password" id="password" placeholder="Masukan Kata Sandi"
                    className="w-full rounded-2xl border-2 border-white px-3 py-2 text-white" {...register("password", { required: true })} />
                {errors.password && <p className="text-red-500 text-md">password Wajib diisi</p>}
                <div className="flex flex-row justify-between gap-4">
                    <p className="text-gray-400 text-sm md:text-md">{deskripsiText} <Link
                        href="../page/register.html" className="text-white text-sm md:text-md">{link}</Link></p>
                    <Link href="link" className="text-white text-sm md:text-md">{linkTwo}</Link>
                </div>
                <div className="flex flex-col space-y-2">
                    <button
                        className="px-3 py-3 bg-[#3D4142] rounded-4xl text-white cursor-pointer  border border-gray-500">{textButton}</button>
                    <p className="text-white text-center">OR</p>
                    <Link to="google.com"
                        className="flex flex-row gap-3 px-3 py-3 bg-transparent rounded-4xl text-white border border-gray-500 cursor-pointer justify-center items-center">
                        <img src={imageLogoGoogle} width="20" alt="button" />Masuk dengan Google
                    </Link>
                </div>
            </form>
        </div>
    )
}
