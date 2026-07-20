import { Link } from "react-router-dom"
import GiffNotFound from "../../../assets/404.jpg"
export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <img src={GiffNotFound} alt="not found" className="md:h-150" />
            <button type="button" className="bg-primary text-2xl font-lato text-white px-10 py-2 rounded-md"><Link to={"/beranda"} >Back to Page</Link></button>
        </div>
    )
}
