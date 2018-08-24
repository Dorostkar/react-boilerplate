import React from 'react';
import {NavLink,IndexLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = () => {
    return (
        <nav>
            {/* when is active applly active class in css */}
            <NavLink to="/" activeClassName="active">Home</NavLink> 
            {" | "}
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <LoadingDots interval={120} dots={20}/>
        </nav>
    );
};
 
export default Header;