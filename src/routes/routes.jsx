import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about/About";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
            path: "about",
            element: <About />

            }

        ]


    }
])

export default router;
