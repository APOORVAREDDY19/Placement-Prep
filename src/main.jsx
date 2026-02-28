import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import Toggle from "./Toggle.jsx"



const rootDiv = document.getElementById("root");
createRoot(rootDiv).render(<App/>);