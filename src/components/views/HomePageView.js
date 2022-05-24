import { Link } from 'react-router-dom';
import "../../css/HomePage.css"


const HomePageView = () => {
  const linkStyle = {
    color: "transparent",
  }

  return (
    <div className='main'>
      
      <h1 className='homepageTitle'>HUNTER COLLEGE</h1>      
      <Link to={'/instructors'} style={linkStyle}>
        <button className='homeButtons'> <span className='text'>ALL INSTRUCTORS</span></button>
      </Link>
      <Link to={'/courses'} style={linkStyle} > 
        <button className='homeButtons'>ALL COURSES</button> 
      </Link>
      
     


    </div>
  );    
}




export default HomePageView;
