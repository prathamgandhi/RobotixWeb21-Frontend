import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { store, persistor } from "./store/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/css/nice-select.css';
import './assets/css/owl.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/flaticon.css';
import './assets/css/main.css';
import './assets/css/team.css';
import "./assets/css/contactus.css";


ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />

        </PersistGate>

    </Provider>

, document.getElementById("root"));
registerServiceWorker();
