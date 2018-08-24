import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import {browserHistory} from "react-router-dom"

import * as courseActions from "../../actions/courseActions";
import { createCourse } from "./../../actions/courseActions";
import CourseList from "./CourseList";
class CoursePage extends Component {
  constructor(props) {
    super(props);
  }

  courseRow = (course, index) => {
    return <div key={index}>{course.title}</div>;
  };

  redirectToAddCoursePage=()=>{
    this.props.history.push("/course");
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses </h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} />
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
    actions: bindActionCreators(courseActions, dispatch) //all actions is in this.props.actions now
  };
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);
