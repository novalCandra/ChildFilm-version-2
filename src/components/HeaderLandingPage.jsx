import { CircleAlert, VolumeOff } from 'lucide-react'

export default function HeaderLandingPage({ heading, deskripsi, deskripsiButtonOne, deskripsiButtonTwo, deskripsiButtonThree }) {
    return (
        <header
            className="relative bg-[url('assets/gojo.jpg')] bg-repeat bg-cover bg-center h-100 md:min-h-190 flex items-end md:items-center">
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
            <div className="relative flex flex-col z-10 text-white px-2 md:px-10 w-full pb-6 md:pb-0 space-y-5">
                <div className="space-y-4 md:space-y-6 px-10 w-full md:max-w-2xl">
                    <h1 className="text-2xl md:text-5xl font-lato">{heading}</h1>
                    <p className="text-md  md:text-lg font-lato line-clamp-3 md:line-clamp-none">{deskripsi}</p>
                </div>
                <div className="relative flex flex-col justify-end px-4 md:px-10">
                    <div className="flex flex-row md:gap-3 items-center justify-between ">
                        <div className="flex flex-row space-x-1.5 md:space-x-6">
                            <button
                                className="bg-blue-800 text-white px-1 py-2 md:px-5 md:py-3 w-20 rounded-2xl font-lato">{deskripsiButtonThree}</button>
                            <div className="flex flex-row bg-[#3D4142]/70 px-2 py-2 md:px-6 md:py-3 rounded-xl font-lato gap-2 items-center">
                                <CircleAlert size={24} />
                                <span className='font-lato text-md md:text-xl'>{deskripsiButtonTwo}</span>
                            </div>
                            <button className="border-2 border-gray-500 rounded-full md:rounded-3xl px-2 py-2 md:px-2.5 md:py-2.5
                        text-md md:text-xl font-lato">{deskripsiButtonOne}</button>
                        </div>
                        <button
                            className="border-2 border-gray-500 rounded-full md:rounded-3xl px-1 py-1 md:px-2.5 md:py-2.5 text-xl font-lato cursor-pointer animate-bounce">
                            <VolumeOff size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
