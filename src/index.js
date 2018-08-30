import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Routes from "./routes";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";

import "./styles/styles.css"; //webpack can import css files too!.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/toastr/build/toastr.min.css'

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
