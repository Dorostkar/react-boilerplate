import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from 'redux';

import * as courseActions from "../../actions/courseActions";
import { createCourse } from './../../actions/courseActions';
class CoursePage extends Component {
  constructor(props) {
    super(props);
  }

  courseRow = (course, index) => {
    return <div key={index}>{course.title}</div>;
  };

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursePage.protoTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions:bindActionCreators(courseActions,dispatch) //all actions is in this.props.actions now
  };
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
