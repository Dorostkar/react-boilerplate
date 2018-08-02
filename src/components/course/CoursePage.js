import React, { Component } from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import * as courseActions from '../../actions/courseActions';
class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        course: { title: "" }
    };
}

  onTitleChange=(event)=>{
    const course=this.state.course;
    course.title=event.target.value;
    this.setState({course:course})
  };

  onClickSave=(event)=>{
     this.props.dispatch(courseActions.createCourse(this.state.course));
  };

  courseRow=(course,index)=>{
    return <div key={index}>{course.title}</div>
  };

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input type="submit" onClick={this.onClickSave} value="Save" />
      </div>
    );
  }
}

CoursePage.protoTypes={
  dispatch:PropTypes.func.isRequired,
  courses:PropTypes.array.isRequired
}

function mapStateToProps(state,ownProps){
  return {
    courses:state.courses
  }
}
export default connect(mapStateToProps)(CoursePage);
