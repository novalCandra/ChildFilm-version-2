import { Plus, Upload, X } from "lucide-react";
import PlayListComponents from "../components/PlayListComponents";
import dataDumyPlaylist from "../../../data/Playlist.json"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { schemaPlayList } from "../../../schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
export default function PlayListPage() {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(null);
    const [modalCreate, setModalCreate] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schemaPlayList),
        defaultValues: {
            judul: "",
            nama: "",
        }
    })


    function handleMOdal(id) {
        setModal(prev => (prev === id ? null : id))
    }

    function createPlayList() {
        setModalCreate(prev => !prev)
    }

    useEffect(() => {
        const fetchData = () => {
            const dataDumy = setData(dataDumyPlaylist)
            return dataDumy
        }
        fetchData()
    }, [])


    const onSubmit = (data) => {
        try {
            const image = URL.createObjectURL(data.thumbnail[0])
            const newPlayList = {
                id: data + 1,
                imageThumbnail: image,
                judulPlayList: data.judul,
                namaPlayList: data.nama
            }
            setModalCreate(false)
            setData(prev => [...prev, newPlayList])
            localStorage.setItem("playList", JSON.stringify(newPlayList))
            reset()
        } catch (error) {
            return console.error(error)
        }
    }

    function deletePlayList(id) {
        const deleteData = data.filter(item => item.id !== id)
        setData(deleteData)
    }

    function updateDaraPlayList(updateDataItems) {
        setData(prev => prev.map(item => item.id === updateDataItems.id ? updateDataItems : item))
    }
    return (
        <div className="bg-[#22282A] min-h-screen">
            <div className="flex flex-col space-y-5 py-10 px-5 md:px-20">
                <div className="flex flex-row justify-between">
                    <h2 className="text-white font-lato text-xl md:text-3xl font-bold">Playlist Film</h2>
                    <button onClick={() => createPlayList(true)} className="flex flex-row gap-2 bg-white items-center rounded-md px-2 py-1 md:px-2 md:py-3 font-lato font-semibold"><Plus />Buat PlayList</button>
                </div>
                <div className="flex flex-col w-96 md:w-full md:h-60 py-3 h-screen rounded-xl space-y-9">
                    {data?.map((item) => (
                        <PlayListComponents key={item.id} id={item.id} imageThumbnail={item?.imageThumbnail} judulPlayList={item.judulPlayList} namaPlayList={item.namaPlayList} handleModal={() => handleMOdal(item.id)} modal={modal === item.id} propsDeleteData={deletePlayList} onUpdate={updateDaraPlayList} closePopup={() => setModal(null)} />
                    ))}
                </div>
                {modalCreate && (
                    <div className="absolute top-50 bottom-50 md:top-50 md:left-180 md:right-140  bg-white w-96 min-h-170 px-10 py-10 opacity-80 rounded-2xl">
                        <div className="flex flex-col justify-between gap-2">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-3xl font-lato text-dark-primary font-bold">Create PlayList</h1>
                                <button type="submit" onClick={() => createPlayList(false)}><X size={20} /></button>
                            </div>
                            <p className="text-md font-lato font-bold text-dark-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
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
                            {/* </div> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
