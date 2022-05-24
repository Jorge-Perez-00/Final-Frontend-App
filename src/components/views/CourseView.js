import { Link } from "react-router-dom";
import "../../css/Course.css"

const CourseView = (props) => {
  const { course } = props;
  return (
    <div className="main">
      <h1 className="courseTitle">{course.title}</h1>
      {course.instructor ? <h3 className="courseInstructor">Instructor: {course.instructor.firstname + " " + course.instructor.lastname}</h3> : <h3 className="courseInstructor">staff</h3>}
      <h3 className="courseInfo">{course.timeslot}</h3>
      <h3 className="courseInfo">{course.location}</h3>
      <Link to={{ pathname: `/courses`, state: course }}>
        <button className="moveBackCourses">Back to Courses</button>
      </Link>
      <Link to={{ pathname: `/editcourse`, state: course }}>
        <button className="editCourse">Edit Course</button>
      </Link>
    </div>
  );

};

export default CourseView;