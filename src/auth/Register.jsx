import CardComponents from '../components/CardComponents'
import { SchemaRegister } from '../schema/schema'
import { ConfigRegister } from './config/RegisterConfig'

export default function RegisterPage() {
    return (
        <>
            <div className={`absolute inset-0 bg-[url(assets/bagroundRegister.jpg)] bg-center bg-repeat bg-cover`} />
            <div className="relative flex min-h-screen items-center justify-center">
                <CardComponents title={ConfigRegister.title} imageLogo={ConfigRegister.imageLogo} imageLogoGoogle={ConfigRegister.imageLogoGoogle} deskripsi={ConfigRegister.deskripsi} deskripsiText={ConfigRegister.deskripsiText} textButton={ConfigRegister.textButton} link={ConfigRegister.link} textButtonGoogle={ConfigRegister.textButtonGoogle} formFiled={ConfigRegister.fields} schema={SchemaRegister} linkPath={ConfigRegister.linkPath} linkPathNavigate={"/"} />
            </div>
        </>
    )
}
