import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;


  const linkStyle = {
    color: "transparent",
  }

  if (!courses.length) {
    return (
    <div>
      <Link to={`/`} style={linkStyle}>
        <h1 className='homepageTitle'>HUNTER COLLEGE</h1>
      </Link>
      <h2 style={{color: "white", fontSize: "50px"}}>There are no courses.</h2>

        <Link to={`/newcourse`} style={linkStyle}>
          <button className="newButtonCourse" style={{textAlign: 'center'}}>Add New Course</button>
      </Link>
    </div>
    );
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