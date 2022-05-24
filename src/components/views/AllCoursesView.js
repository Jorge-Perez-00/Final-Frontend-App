import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
    </div>
    );
  }

  const linkStyle = {
    color: "transparent",
  }

  return (
    <div className="main">
      <Link to={`/`} style={linkStyle}>
        <h1 className='homepageTitle'>HUNTER COLLEGE</h1>     
      </Link>
      <Link to={`/newcourse`} style={linkStyle}>
        <button className="newButtonCourse">Add New Course</button>
      </Link>
      <table>
        <tr>
          <th>Course</th>
          <th></th>
        </tr>
        {courses.map((course) => {
          let title = course.title;
          return (
            <tr key={course.id}>
              <td>
                <Link to={`/course/${course.id}`} style={linkStyle}>
                  <h1 className="instructorCourseLink">{title}</h1>
                </Link></td>
              <td className="deleteCells">          
                <button onClick={() => deleteCourse(course.id)} className="deleteButton">X</button>
              </td>
            </tr>
          );
        }
        )}
      </table>
      
    </div>
  );
};


export default AllCoursesView;