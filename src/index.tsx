import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import LightTheme from "./assets/themes/LightTheme";
import GlobalCss from "./assets/styles/GlobalCss";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ThemeProvider theme={LightTheme}>
        <Provider store={store}>
          <GlobalCss />
          <App history={history} />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
