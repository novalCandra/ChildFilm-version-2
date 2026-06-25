import ImageFotoLogo from "../../assets/logo.png"
import ImageLogoGoogle from "../../assets/google.png"
export const ConfigRegister = {
    title: "DAFTAR",
    imageLogo: ImageFotoLogo,
    imageLogoGoogle: ImageLogoGoogle,
    deskripsi: "Selamat datang!",
    deskripsiText: "Sudah punya akun?",
    textButton: "Daftar",
    textButtonGoogle: "Masuk dengan Google",
    link: "Masuk",
    linkPath: "/login",
    fields: [
        {
            id: 1,
            name: "username",
            label: "Username",
            type: "text",
            placehonder: "Masukan username",
        },
        {
            id: 2,
            name: "password",
            label: "Password",
            type: "password",
            placehonder: "Masukan Kata sandi"
        },
        {
            id: 3,
            name: "konfirmasi",
            label: "Konfirmasi kata sandi",
            type: "password",
            placehonder: "Masukan Kata Sandi"
        }
    ]
}