import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.js";
import { PortfolioContextProvider } from "./components/PortfolioContext.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Pages
import App from "./App";
import RckPage from "./components/rck.js";

ReactDOM.render(
  <React.StrictMode>
    <PortfolioContextProvider>
      <BrowserRouter>
        <Switch>
          <ScrollToTop>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={App} />
            <Route path={process.env.PUBLIC_URL + "/RCK"} component={RckPage} />
          </ScrollToTop>
        </Switch>
        <ToastContainer hideProgressBar />
      </BrowserRouter>
    </PortfolioContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
