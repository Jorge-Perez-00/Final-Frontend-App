import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {

  const linkStyle = {
    color: "transparent",
  }

  if (!props.allInstructors.length) {
    return (
      <div>
        <Link to={`/`} style={linkStyle}>
          <h1 className='homepageTitle'>HUNTER COLLEGE</h1>
        </Link>
        <h2 style={{ color: "white", fontSize: "50px" }}>There are no instructors.</h2>
        <Link to={`/newinstructor`} style={linkStyle}>
          <button className="newButtons">Add New Instructor</button>
        </Link>
      </div>
    )
  }

 

  return (
    <div className="main">
      <div className="content">
        <Link to={`/`} style={linkStyle}>
          <h1 className='homepageTitle'>HUNTER COLLEGE</h1>
        </Link>
        <Link to={`/newinstructor`} style={linkStyle}>
          <button className="newButtons">Add New Instructor</button>
        </Link>

        <table>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th></th>
          </tr>
          {props.allInstructors.map((instructor) => {
            let name = instructor.firstname + " " + instructor.lastname;
            return (
              <tr key={instructor.id}>
                <td>
                  <Link to={`/instructor/${instructor.id}`} style={linkStyle}>
                    <h1 className="instructorCourseLink">{name}</h1>
                  </Link>
                </td>
                <td>
                  <h1 className="instructors">{instructor.department}</h1>
                </td>
                <td className="deleteCells">
                  <button onClick={() => props.deleteInstructor(instructor.id)} className="deleteButton">X</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;