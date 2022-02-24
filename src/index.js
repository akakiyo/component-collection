import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AlertTemplate from "./components/Alert/AlertTemplate";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const options = {
  position: positions.TOP_CENTER,
  transition: transitions.SCALE,
};
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
