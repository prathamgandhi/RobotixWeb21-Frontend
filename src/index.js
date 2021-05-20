import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/css/nice-select.css';
import './assets/css/owl.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/flaticon.css';
import './assets/css/main.css';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
