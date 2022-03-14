import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from 'react-redux';
import store from "./store/Store";

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
