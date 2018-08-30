import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "./common/Header";
import { connect } from "react-redux";
// import DevTools from "./common/DevTools";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children}
        {/* <DevTools/> */}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading:PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
