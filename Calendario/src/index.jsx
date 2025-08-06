import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App.js";

// Importa estilos globales
import "./styles/style.css";
import "./styles/darkMode.css";

// Crea el root y renderiza la App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
