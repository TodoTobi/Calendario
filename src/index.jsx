import React from "react";
import ReactDOM from "react-dom/client";
codex/rename-multitaskfrom.jsx-to-multitaskform.jsx
import App from "../App.js";

// Importa estilos globales
import "./styles/style.css";
import "./styles/darkMode.css";
=======
import App from "./App.jsx";

// Importa estilos globales
import "./components/styles/style.css";
import "./components/styles/darkMode.css";
main

// Crea el root y renderiza la App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
