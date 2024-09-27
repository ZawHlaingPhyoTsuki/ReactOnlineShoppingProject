import { createRoot } from "react-dom/client";
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import router from "./routes/router";


const root = document.getElementById("root");


// render
createRoot(root).render(<RouterProvider router={router} />)