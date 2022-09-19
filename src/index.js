import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./components/App"

let container = document.getElementById('root');

let root = ReactDOM.createRoot(container);

root.render(<App/>)