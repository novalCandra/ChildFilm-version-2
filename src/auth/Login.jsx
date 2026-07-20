import CardComponents from "../components/CardComponents";
import { SchemaLogin } from "../schema/schema";
import { ConfigAuthLogin } from "./config/LoginConfig";
export default function LoginPage() {
    return (
        <>
            <div className={`absolute inset-0 bg-[url(assets/bagroundLogin.jpg)] bg-center bg-repeat bg-cover`} />
            <div className="relative flex min-h-screen items-center justify-center">
                <CardComponents title={ConfigAuthLogin.title} imageLogo={ConfigAuthLogin.imageLogo} imageLogoGoogle={ConfigAuthLogin.imageLogoGoogle} deskripsi={ConfigAuthLogin.deskripsi} deskripsiText={ConfigAuthLogin.deskripsiText} textButton={ConfigAuthLogin.textButton} link={ConfigAuthLogin.link} linkPath={ConfigAuthLogin.linkPath} textButtonGoogle={"Masuk dengan Google"} schema={SchemaLogin} formFiled={ConfigAuthLogin.fields} linkTwo={ConfigAuthLogin.linkTwo} linkPathNavigate={"/beranda"} />
            </div>
        </>
    )
}
