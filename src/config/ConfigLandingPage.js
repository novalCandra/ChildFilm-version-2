import imageLogoDekstop from "../assets/logo.png"
import imageLogoMobile from "../assets/logo_mobile.png"
import LogoProfile from "../assets/provil.png"
import { LogOut, Star, User } from "lucide-react"
export const ConfigHeaderLanding = {
    heading: "Duty After School",
    deskripsi: "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.",
    deskripsiButtonOne: "18+",
    deskripsiButtonTwo: "Selengkapnnya",
    deskripsiButtonThree: "Mulai",
}
export const ConfigMainRilisNew = {
    heading: "RILIS BARU",
    data: [
        {
            id: 1,
            imageFoto: "../assets/hero.png",
            deskripsi: "Episode baru"
        },
        {
            id: 2,
            imageFoto: "../assets/area.png",
        },
        {
            id: 3,
            imageFoto: "../assets/missing.png",
        },
        {
            id: 4,
            imageFoto: "../assets/spiderman.png",
        },
        {
            id: 5,
            imageFoto: "../assets/fastVertikal.png",
        },
        {
            id: 6,
            imageFoto: "../assets/hero.png",
        }
    ]
}

export const ConfigFooter = {
    imageLogoDekstop: imageLogoDekstop,
    headingFooter: "&copy;2026 Chill All Right Reserved",
    listHeadingOne: "Genre",
    listHeadingTwo: "Bantuan",
    reloadLisOne: [
        {
            id: 1,
            listConten: "Aksi"
        },
        {
            id: 2,
            listConten: "Anak-anak"
        },
        {
            id: 3,
            listConten: "Anime"
        },
        {
            id: 4,
            listConten: "Britania"
        }
    ],
    reloadLisTwo: [
        {
            id: 1,
            listConten: "Drama"
        },
        {
            id: 2,
            listConten: "Fantasi Ilmiah & Fantasi"
        },
        {
            id: 3,
            listConten: "Kejahatan"
        },
        {
            id: 4,
            listConten: "KDrama"
        }
    ],
    reloadLisThreee: [
        {
            id: 1,
            listConten: "Komedi"
        },
        {
            id: 2,
            listConten: "Petualangan"
        },
        {
            id: 3,
            listConten: "Perang"
        },
        {
            id: 4,
            listConten: "Romantis"
        }
    ],
    reloadLisFour: [
        {
            id: 1,
            listConten: "Sains & Alam"
        },
        {
            id: 2,
            listConten: "Thriller"
        },
    ],
    reloadListFive: [
        {
            id: 1,
            listConten: "Aksi"
        },
        {
            id: 2,
            listConten: "Anak-anak",
        },
        {
            id: 3,
            listConten: "Anime",
        },
        {
            id: 2,
            listConten: "Britania",
        },
    ],
    reloadListSix: [
        {
            id: 1,
            listContent: "FAQ"
        },
        {
            id: 2,
            listContent: "FAQ"
        },
        {
            id: 3,
            listContent: "FAQ"
        },
        {
            id: 4,
            listContent: "FAQ"
        }
    ],
    reloadListSeven: [
        {
            id: 1,
            listContent: "Aksi"
        },
        {
            id: 2,
            listContent: "Anak-anak"
        },
        {
            id: 3,
            listContent: "Anime"
        },
        {
            id: 4,
            listContent: "Britania"
        }
    ]
}

export const ConfigNavbar = {
    LogoPngDekstop: imageLogoDekstop,
    LogoPngMobile: imageLogoMobile,
    logoProvile: LogoProfile,
    listNavbar: [
        {
            id: 1,
            textList: "Series",
            path: "/series"
        },
        {
            id: 2,
            textList: "Film",
            path: "#"
        },
        {
            id: 3,
            textList: "Daftar Saya",
            path: "/daftar-users"
        }
    ],
    menuList: [
        {
            id: 1,
            textList: "Profile saya",
            path: "#",
            CheckIcon: User
        },
        {
            id: 2,
            textList: "Ubah Premium",
            path: "#",
            CheckIcon: Star
        },
        {
            id: 3,
            textList: "Keluar",
            path: "/login",
            CheckIcon: LogOut
        }
    ]
}