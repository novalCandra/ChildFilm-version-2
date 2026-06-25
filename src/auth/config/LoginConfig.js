import ImageFotoLogo from "../../assets/logo.png"
import ImageLogoGoogle from "../../assets/google.png"
export const ConfigAuthLogin = {
    title: "LOGIN",
    imageLogo: ImageFotoLogo,
    imageLogoGoogle: ImageLogoGoogle,
    deskripsi: "Selamat datang kembali!",
    deskripsiText: "Belum Punya akun ?",
    textButton: "Login",
    link: "Daftar",
    fields: [
        {
            name: "username",
            label: "username",
            type: "text"
        },
        {
            name: "password",
            label: "password",
            type: "password"
        }
    ]
}