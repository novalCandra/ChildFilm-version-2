import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Register";
import LandingPage from "../page/LandingPage";
import LayoutLandingPage from "../layout/LayoutLandingPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutLandingPage,
        children: [
            { index: true, Component: LandingPage }
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