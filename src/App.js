import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  InstructorContainer,
  CourseContainer,
  AllInstructorsContainer,
  AllCoursesContainer,
  NewCourseContainer,
  NewInstructorContainer,
  EditInstructorContainer,
  EditCourseContainer,
} from './components/containers';
// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {

  document.body.style.backgroundColor = "#190b50"

  /*
  background: rgb(42, 10, 96);
  background: linear-gradient(0deg, rgba(42, 10, 96, 1) 0%, rgba(14, 47, 71, 1) 100%);
  */
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/instructors" component={AllInstructorsContainer} />
        <Route exact path="/newinstructor" component={NewInstructorContainer} />
        <Route exact path="/instructor/:id" component={InstructorContainer} />
        <Route exact path="/editinstructor" component={EditInstructorContainer} />
        <Route exact path="/courses" component={AllCoursesContainer} />
        <Route exact path="/newcourse" component={NewCourseContainer} />
        <Route exact path="/course/:id" component={CourseContainer} />
        <Route exact path="/editcourse" component={EditCourseContainer} />

      </Switch>        
    </div>
  );
}

export default App;

