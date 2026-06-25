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
    linkPath: "/register",
    linkTwo: "Lupa kata sandi ?",
    fields: [
        {
            id: 1,
            name: "username",
            label: "username",
            type: "text",
            placehonder: "Masukan username"
        },
        {
            id: 2,
            name: "password",
            label: "password",
            type: "password",
            placehonder: "Masukan Kata sandi"
        }
    ]
}