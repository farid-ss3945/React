import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // <-- must match 'root'
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
