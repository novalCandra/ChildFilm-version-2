import { Plus, Upload, X } from "lucide-react";
import PlayListComponents from "../components/PlayListComponents";
import useHooksPlayList from "../../../hooks/usePlayList";
export default function PlayListPage() {
    const { data, modal, modalCreate, register, handleSubmit, errors, handleMOdal, createPlayList, onSubmit, deletePlayList, updateDaraPlayList, setModal } = useHooksPlayList()
    return (
        <div className="bg-paper-background min-h-screen">
            <div className="flex flex-col space-y-5 py-10 px-5 md:px-20">
                <div className="flex flex-row justify-between">
                    <h2 className="text-white font-lato text-xl md:text-3xl font-bold">Playlist Film</h2>
                    <button onClick={() => createPlayList(true)} className="flex flex-row gap-2 bg-white items-center rounded-md px-2 py-1 md:px-2 md:py-3 font-lato font-semibold"><Plus />Buat PlayList</button>
                </div>
                {data.length > 0 ? (
                    data?.map((item) => (
                        <PlayListComponents key={item.id} id={item.id} imageThumbnail={item?.imageThumbnail} judulPlayList={item.judulPlayList} namaPlayList={item.namaPlayList} handleModal={() => handleMOdal(item.id)} modal={modal === item.id} propsDeleteData={deletePlayList} onUpdate={updateDaraPlayList} closePopup={() => setModal(null)} />
                    ))
                ) : <div className="flex justify-center items-center min-h-screen">
                    <h2 className="text-2xl md:text-xl font-lato text-white font-bold text-center">MASIH BELUM DATA PLAY LIST</h2>
                </div>}
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
