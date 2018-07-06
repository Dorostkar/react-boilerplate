import React from 'react';
import {Route,IndexRoute} from "react-router";

import App from "./components/App";
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage';

export default (

    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/> {/*if path is / */}
        <Route path="about" component={AboutPage}/> {/*if path is /about */}
        <Route path="courses" component={CoursePage}/>

    </Route>
);