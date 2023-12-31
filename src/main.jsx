import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router/Router.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 

  <QueryClientProvider client={queryClient}>
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>
</QueryClientProvider>
);


 {/* <React.StrictMode>
   
  </React.StrictMode> */}