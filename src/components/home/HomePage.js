import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class HomePage extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Pluralsight Adminstration</h1>
                <p>React, Redux and React-Router in ES6 for ultra-responsive web app</p>
                <NavLink to="about" className="btn btn-primary btn-lg">Learn More</NavLink>
            </div>
            
        );
    }

}
export default HomePage;
