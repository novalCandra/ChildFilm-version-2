import { useEffect, useState } from "react";
import { getPlayListService } from "../service/PlayListService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaPlayList } from "../schema/schema";

const useHooksPlayList = () => {
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
        async function getdataPlayList() {
            try {
                let response = await getPlayListService()
                if (!response.ok) {
                    throw new Error(`Response Status ${response.status}`)
                }

                const result = await response.json();
                setData(result)
            } catch (error) {
                return console.error(error)
            }
        }
        getdataPlayList()
    }, [])


    const onSubmit = (data) => {
        try {
            const image = URL.createObjectURL(data.thumbnail[0])
            const newPlayList = {
                id: Number(data?.id),
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

    return { data, modal, modalCreate, register, handleSubmit, errors, handleMOdal, createPlayList, onSubmit, deletePlayList, updateDaraPlayList, setModal }
}

export default useHooksPlayList
