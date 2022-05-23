import { Link } from "react-router-dom";


const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>staff</h3>}
      <h3>{course.timeslot}</h3>
      <h3>{course.location}</h3>
      <Link to={{ pathname: `/editcourse`, state: course }}>
        <button>Edit</button>
      </Link>
    </div>
  );

};

export default CourseView;