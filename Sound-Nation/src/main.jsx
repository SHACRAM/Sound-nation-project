import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(function (registration) {
      console.log("Service Worker registered with scope: ", registration.scope);
    })
    .catch(function (err) {
      console.log("Service Worker registration failed: ", err);
    });
}
