import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCourseView from '../views/EditCourseView';
import { editCourseThunk } from '../../store/thunks';



class EditCourseContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
            timeslot: this.props.location.state.timeslot,
            location: this.props.location.state.location,
            redirect: false,
            redirectId: null
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let course = {
            title: this.state.title,
            timeslot: this.state.timeslot,
            location: this.state.location,
        };

        let courseId = this.props.location.state.id
        await this.props.editCourse({id: courseId, ...course });

        this.setState({
            redirect: true,
        });
    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/course/${this.props.location.state.id}`} />)
        }
        return (
            <EditCourseView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                title={this.state.title}
                timeslot={this.state.timeslot}
                location={this.state.location}
            />
        )
    }

}

// map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        editCourse: (course) => dispatch(editCourseThunk(course)),
    };
};


export default connect(null, mapDispatch)(EditCourseContainer);