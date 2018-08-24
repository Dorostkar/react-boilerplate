import * as types from "./actionTypes";

import CourseApi from "../api/mockCourseApi";

export const createCourse = course => {
  return { type: types.CREATE_COURSE, course };
};

export const loadCoursesSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const createCourseSuccess = course => {
  return { type: types.CREATE_COURSE_SUCCESS, course };
};

export const updateCourseSuccess = course => {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
};

export const loadCourses = () => {
  return dispatch => {
    return CourseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const saveCourse = course => {
  return (dispatch, getState) => {
    //getState allow us to access to redux store directly
    return CourseApi.saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
};
