import { Link } from "react-router-dom";
import profileImage from "../../images/anonymous.jpg"
import "../../css/Instructor.css"

const InstructorView = (props) => {
  const {instructor, editCourse, allCourses} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id && course.instructorId === null);
  
  const linkStyle = {
    color: "transparent",
  }

  return (
    <div className="main">
      <Link to={`/`} style={linkStyle}>
        <h1 className='homepageTitle'>HUNTER COLLEGE</h1>
      </Link>
      {instructor.imageUrl === null ? <img src={profileImage} alt="Default Image" /> : <img src={instructor.imageUrl} alt="Instructor's Image" />}
      <h1 className="instructorName">{instructor.firstname}</h1>
      <h3 className="instructorDepartment">{instructor.department}</h3>

      <Link to={{ pathname: `/instructors`}} style={linkStyle}>
        <button className="moveBack">Back to Instructors</button>
      </Link>
      <Link to={{ pathname:`/editinstructor`, state: instructor}} style={linkStyle}>
        <button className="editInstructor">Edit Instructor</button>
      </Link>

      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}} className="courseLists">
        <div className="courseDivs">Assigned courses:

        {assignedCourses.length === 0 ? <h2 className="message">No Assigned Courses</h2> :
          assignedCourses.map( course => {
            return (
              <div key={course.id} className="uniqueCourse">  
                <Link to={`/course/${course.id}`} style={linkStyle}>
                  <h2 className="courseTitle">{course.title}</h2>
                </Link>
                <button onClick={() => editCourse({ id: course.id, instructorId: null })} className="editCourseDelete">x</button>          
              </div>
            );
          })}
        </div>
        <div className="courseDivs">Available courses:
        {availableCourses.length === 0 ? <h2 className="message">No Available Courses</h2>:
          availableCourses.map( course => {
            return (
              <div key={course.id} className="uniqueCourse">
                <Link to={`/course/${course.id}`} style={linkStyle}>
                  <h2 className="courseTitle">{course.title}</h2>
                </Link>
                <button onClick={() => editCourse({ id: course.id, instructorId: instructor.id })} className="editCourseAdd">+</button>
              </div>
            );
        })}</div>

      </div>

  
    </div>
  );

};

export default InstructorView;