import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }

  componentWillReceiveProps = (nextProps)=>{
    if(this.props.course.id !== nextProps.course.id){
      this.setState({course:Object.assign({},nextProps.course)})
    }
  }
  updateCourseState = event => {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({ course: course });
  };

  saveCourse = event => {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    debugger;
    this.props.history.push("/courses");
  };
  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// ManageCoursePage.contextTypes={
//   router:PropTypes.object
// };

const getCourseById = (courses, id) => {
  const course = courses.filter(course => course.id == id);
  return course.length ? course[0] : null;
};

function dispatchStateToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id; //from the path '/course/:id'
  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });
  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}
export default connect(
  mapStateToProps,
  dispatchStateToProps
)(ManageCoursePage);
