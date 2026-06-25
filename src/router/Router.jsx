import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>HELLO</div>
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