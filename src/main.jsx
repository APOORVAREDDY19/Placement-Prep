import React from "react";
import App from "./Task1/App.jsx";
import { createRoot } from "react-dom/client";
import Toggle from "./Task2/Toggle.jsx"
import Dashboard from "./Task3/Dashboard.jsx"



const rootDiv = document.getElementById("root");
createRoot(rootDiv).render(
<Dashboard/>

);