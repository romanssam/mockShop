import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../../pages/MainPage/index.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
]);