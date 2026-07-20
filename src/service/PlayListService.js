export async function getPlayListService() {
    return await fetch(`${import.meta.env.VITE_API_URL}/GET`, {
        method: "GET",
    })
}
