import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import { Provider } from "react-redux";
import store from './redux/store';
// STORE.JS DOSYASINDAN VARSAYILAN OLARAK İMPORT EDİLEN HER NE VARSA AL DEDİK.
// VARSAYILAN İMPORTUN GÜZEL YANI ŞU: İMPORT ETTİĞİMİZ ŞEYE BİZ İSİM VEREBİLİYORUZ.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
