import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.js";

//Pages
import App from './App';
import RckPage from "./components/rck.js"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <ScrollToTop>
                    <Route path={process.env.PUBLIC_URL + '/'} component={App} />
                    <Route path={process.env.PUBLIC_URL + '/RCK'} component={RckPage} />
                </ScrollToTop>
            </Switch>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
