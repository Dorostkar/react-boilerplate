import React from "react";
import { NavLink, IndexLink } from "react-router-dom";
import LoadingDots from "./LoadingDots";
import { PropTypes } from "prop-types";

const Header = ({ loading }) => {
  return (
    <nav>
      {/* when is active applly active class in css */}
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeClassName="active">
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      {loading && <LoadingDots interval={120} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
