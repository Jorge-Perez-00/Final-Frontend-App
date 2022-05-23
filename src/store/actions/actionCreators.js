import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All instructors
export const fetchAllInstructors = (instructors) => {
  return {
    type: at.FETCH_ALL_INSTRUCTORS,
    payload: instructors,
  };
};

//Single instructor
export const fetchInstructor = (instructor) => {
  return {
    type: at.FETCH_INSTRUCTOR,
    payload: instructor,
  };
};

//add instructor
export const addInstructor = (instructor) => {
  return {
    type: at.ADD_INSTRUCTOR,
    payload: instructor,
  }
}

//delete instructor
export const deleteInstructor = (instructorId) => {
  return {
    type: at.DELETE_INSTRUCTOR,
    payload: instructorId,
  }
}

//edit instructor
export const editInstructor = (instructor) => {
  return {
    type: at.EDIT_INSTRUCTOR,
    payload: instructor,
  }
}


//All courses
export const fetchAllCourses = (courses) => {
  return {
    type: at.FETCH_ALL_COURSES,
    payload: courses,
  };
};

//Single course
export const fetchCourse = (course) => {
  return {
    type: at.FETCH_COURSE,
    payload: course,
  };
};

//add course
export const addCourse = (course) => {
  return {
    type: at.ADD_COURSE,
    payload: course,
  };
};

//delete course
export const deleteCourse = (courseId) => {
  return {
    type: at.DELETE_COURSE,
    payload: courseId,
  };
};

//edit course
export const editCourse = (course) => {
  return {
    type: at.EDIT_COURSE,
    payload: course,
  };
};

