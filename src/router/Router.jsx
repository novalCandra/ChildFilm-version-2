import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Register";
import LandingPage from "../page/LandingPage";
import LayoutLandingPage from "../layout/LayoutLandingPage";
import PageDaftar from "../page/users/daftarFilm/PageDaftar";
import PageSeries from "../page/users/daftarFilm/PageSeries";
import PageFilm from "../page/users/daftarFilm/PageFilm";
import Profile from "../page/users/profile/Profile";
import langganan from "../page/users/langganan/langganan";
import Pembayaran from "../page/users/pembayaran/Pembayaran";
import Transaksi from "../page/users/transaksi/Transaksi";
import PlayListPage from "../page/users/playList/PlayList";
import { AuthRouter } from "./AuthRouter";
import NotFound from "../page/users/404/NotFound";

const router = createBrowserRouter([
    {
        path: "/beranda",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: LandingPage }
        ]
    },
    {
        path: "/daftar-users",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: PageDaftar }
        ]
    },
    {
        path: "/series",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: PageSeries }
        ]
    },
    {
        path: "/film",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: PageFilm }
        ]
    },
    {
        path: "/profile",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: Profile }
        ]
    },
    {
        path: "/premium",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: langganan }
        ]
    },

    {
        path: "/pembayaran",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: Pembayaran }
        ]
    },
    {
        path: "/transaksi",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: Transaksi }
        ]
    },
    {
        path: "/playlist",
        Component: LayoutLandingPage,
        loader: AuthRouter,
        children: [
            { index: true, Component: PlayListPage }
        ]
    },
    {
        path: "/",
        Component: LoginPage,
        children: [
            { index: true, Component: LoginPage }
        ]
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router