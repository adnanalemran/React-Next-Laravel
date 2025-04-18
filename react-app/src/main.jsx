import ReactDOM from "react-dom/client";
 
import "./index.css";

import { router } from "./router/Router";
import { RouterProvider } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <RouterProvider router={router} />
  
);
