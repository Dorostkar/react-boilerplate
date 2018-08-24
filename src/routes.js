import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursePage from "./components/course/CoursePage";
import ManageCoursePage from "./components/course/ManageCoursePage";

export default () => (
  
    <App>
      <Switch>
      <Route exact path='/' exact  component={HomePage} /> {/*if path is / */}
      <Route path="/about" component={AboutPage} /> {/*if path is /about */}
      <Route path="/courses" component={CoursePage} />
      <Route path="/course/:id" component={ManageCoursePage} />
      <Route path="/course" component={ManageCoursePage} />
      </Switch>
    </App>
  
);
