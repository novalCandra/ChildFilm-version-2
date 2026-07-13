import { zodResolver } from '@hookform/resolvers/zod'
import { EllipsisVertical, PencilLine, Trash2, Upload, X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { schemaPlayList } from '../../../schema/schema'

export default function PlayListComponents({ imageThumbnail, handleModal, judulPlayList, namaPlayList, modal, propsDeleteData, id, onUpdate, closePopup }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schemaPlayList)
    })
    const [popupModal, setpopModal] = useState({
        visible: false,
        y: 0,
        x: 0
    })
    const [updateModal, setUpdateModal] = useState(false)

    const getModalHover = (e) => {
        const handle = e.currentTarget.getBoundingClientRect();
        setpopModal({
            visible: true,
            y: handle.bottom,
            x: handle.left - 100
        })
        return handle
    }

    function ModalUpdate() {
        reset({
            judul: judulPlayList,
            nama: namaPlayList
        })
        setUpdateModal(prev => !prev)
        handleModal(false)
        closePopup()
        setpopModal(false)
    }


    const onSubmit = (data) => {
        try {
            const updatePlayList = {
                id,
                imageThumbnail,
                judulPlayList: data.judul,
                namaPlayList: data.nama
            }
            onUpdate(updatePlayList)
            setUpdateModal(true)
            handleModal(false)
        } catch (error) {
            return console.error(error)
        }
        handleModal(false)
        setUpdateModal(false)
    }
    return (
        <div className="flex flex-row items-center justify-between  space-x-2 border-2 border-olive-300 px-2 md:px-5 md:py-10 py-5 rounded-2xl relative">
            <div className="flex flex-row items-center justify-center space-x-2 md:space-x-5">
                <img src={imageThumbnail} alt="foto playlist" className="w-25 h-20 md:w-35 md:h-20 rounded-md" />
                <div className="flex flex-col">
                    <h2 className="text-white font-lato font-bold text-xl md:text-2xl line-clamp-1">{judulPlayList}</h2>
                    <p className="line-clamp-3 text-white font-lato font-semibold text-md md:text-xl">{namaPlayList}</p>
                </div>
            </div>
            <button type="button" onClick={(e) => {
                getModalHover(e)
                handleModal(id)
            }}>
                <EllipsisVertical className="text-white size-7" />
            </button>
            {modal && (
                <div className="fixed bg-white flex flex-col items-center justify-center w-30 h-20 rounded-md" style={{ top: popupModal.y, left: popupModal.x }}>
                    <div className="flex flex-col space-y-2 cursor-pointer">
                        <button className="flex flex-row gap-4" type="button" onClick={() => {
                            propsDeleteData(id)
                        }}><Trash2 /><span className="text-bold
                                     font-lato">Delete</span></button>
                        <button onClick={() => ModalUpdate(true)} className="flex flex-row gap-4"><PencilLine /><span className="text-bold
                                     font-lato">Update</span></button>
                    </div>
                </div>
            )}

            {updateModal && (
                <div className="fixed inset-5 top-50 bottom-50 md:left-180 md:right-140 bg-white w-96 min-h-170 px-10 py-10 opacity-80 rounded-2xl z-99">
                    <div className="flex flex-col justify-between gap-2">
                        <div className="flex flex-row justify-between py-2">
                            <h1 className="text-3xl font-lato text-dark-primary font-bold">Update PlayList</h1>
                            <button type="submit" onClick={() => ModalUpdate(false)}><X size={20} /></button>
                        </div>
                        <p className="text-md font-lato font-bold text-dark-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>

                        <div className="flex flex-col">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
                                <label htmlFor="judul" className="font-lato font-semibold">Judul PlayList</label>
                                <input type="text" id="judul" name="judul" placeholder="Masukan Judul PlayList" className="px-2 py-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-gray-300" {...register('judul')} />
                                {errors?.judul?.message && <span className="text-red-500 font-semibold font-lato">{errors.judul?.message}</span>}
                                <label htmlFor="nama" className="font-lato font-semibold">Nama Playlist</label>
                                <input type="text" id="nama" name="nama" placeholder="Masukan Nama PlayList" className="px-2 py-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-gray-300" {...register('nama')} />
                                {errors?.nama?.message && <span className="text-red-500 font-semibold font-lato">{errors?.nama?.message}</span>}
                                <div className="px-5 py-7  border-2 border-gray-800 border-dashed">
                                    <label htmlFor="uploadImage" className="flex flex-row gap-2 justify-center items-center border-2 border-gray-500 border-dashed h-20"><Upload /><span className="font-lato font-semibold">Upload Thumbnail</span>
                                        <input type="file" name="uploadImage" id="uploadImage" multiple style={{ display: "none" }} {...register('thumbnail')} />
                                    </label>
                                    {errors?.thumbnail?.message && <span className="text-red-500 font-semibold font-lato">{errors?.thumbnail?.message}</span>}
                                </div>

                                <button className="bg-primary h-10 rounded-2xl text-white font-lato">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
