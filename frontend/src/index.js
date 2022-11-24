import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
     <StoreProvider>
      <HelmetProvider>
    <App />
    </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
