import { redirect } from "react-router-dom";
export async function AuthRouter() {
    const token = localStorage.getItem("token");
    if (!token) {
        throw redirect("/")
    }
    return null
}
