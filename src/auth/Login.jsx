import CardComponents from "../components/CardComponents";
import { ConfigAuthLogin } from "./config/LoginConfig";
export default function LoginPage() {
    return (
        <>
            <div className={`absolute inset-0 bg-[url(public/bagroundLogin.jpg)] bg-center bg-repeat bg-cover`} />
            <div className="relative flex min-h-screen items-center justify-center">
                <CardComponents title={ConfigAuthLogin.title} imageLogo={ConfigAuthLogin.imageLogo} imageLogoGoogle={ConfigAuthLogin.imageLogoGoogle} deskripsi={ConfigAuthLogin.deskripsi} deskripsiText={ConfigAuthLogin.deskripsiText} textButton={ConfigAuthLogin.textButton} link={ConfigAuthLogin.link} />
            </div>
        </>
    )
}
