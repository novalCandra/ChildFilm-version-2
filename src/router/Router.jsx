import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>HELLO</div>
    },
    {
        path: "/login",
        element: <LoginPage />
    }
])

export default router