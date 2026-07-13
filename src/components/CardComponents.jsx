import { data, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export default function CardComponents({ title, deskripsi, deskripsiText, linkTwo, textButton, link, imageLogo, imageLogoGoogle, linkPath, textButtonGoogle, formFiled, schema }) {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(schema)
    });
    const onSubmit = () => {
        console.log(data)
    }
    return (
        <div className="flex flex-col space-y-6 w-120 md:w-140 px-5 md:px-10 py-5 md:py-10 bg-[#22282A]/40 rounded-xl backdrop-blur-2xl">
            <div className="justify-center items-center mx-auto">
                <img src={imageLogo} alt="Foto Logo" className="w-32 items-center justify-center" />
            </div>
            <div className="space-y-3 md:space-y-3">
                <h2 className="text-xl md:text-3xl text-white text-center font-bold font-lato">{title}</h2>
                <p className="text-md md:text-md text-white text-center font-lato">{deskripsi}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="-mt-5 space-y-2 md:px-5 w-85 md:w-600 max-w-md mx-auto">
                {formFiled?.map((field) => (
                    <>
                        <div className="flex flex-col">
                            <label key={field.id} htmlFor={field.name} className="text-white text-md  md:text-lg font-lato">{field.label}</label>
                        </div>
                        <input id={field.name} type={field.type} name={field.name} placeholder={field.placehonder}
                            className="w-full rounded-2xl border-2 border-white px-3 py-2 text-white" {...register(field.name, { required: true })} />
                        {errors[field.name] && <p className="text-red-500 text-md">{errors[field.name]?.message}</p>}
                    </>
                ))}
                <div className="flex flex-row justify-between gap-4">
                    <p className="text-gray-400 text-sm md:text-md font-lato">{deskripsiText} <Link
                        to={linkPath} className="text-white text-sm md:text-md font-lato">{link}</Link></p>
                    <Link href="link" className="text-white text-sm md:text-md font-lato">{linkTwo}</Link>
                </div>
                <div className="flex flex-col space-y-2">
                    <button type="submit"
                        className="px-3 py-3 bg-[#3D4142] rounded-4xl text-white cursor-pointer  border border-gray-500 font-lato">{textButton}</button>
                    <p className="text-white text-center font-lato">OR</p>
                    <Link to="google.com"
                        className="flex flex-row gap-3 px-3 py-3 bg-transparent rounded-4xl text-white border border-gray-500 cursor-pointer justify-center items-center">
                        <img src={imageLogoGoogle} width="20" alt="button" />{textButtonGoogle}
                    </Link>
                </div>
            </form>
        </div>
    )
}
