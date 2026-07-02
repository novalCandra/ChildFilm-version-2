export async function getstartFilm() {
    return await fetch("htttp")
}
export async function getRatingFilm() {
    const token = localStorage.getItem("token")
    return await fetch("htttp", token, {
        credentials: "include",
        method: "GET"
    })
}