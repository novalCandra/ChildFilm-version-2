import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Register";
import LandingPage from "../page/LandingPage";
import LayoutLandingPage from "../layout/LayoutLandingPage";
import PageDaftar from "../page/users/daftarFilm/PageDaftar";
import PageSeries from "../page/users/daftarFilm/PageSeries";

const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutLandingPage,
        children: [
            { index: true, Component: LandingPage }
        ]
    },
    {
        path: "/daftar-users",
        Component: LayoutLandingPage,
        children: [
            { index: true, Component: PageDaftar }
        ]
    },
    {
        path: "/series",
        Component: LayoutLandingPage,
        children: [
            { index: true, Component: PageSeries }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
])

export default router