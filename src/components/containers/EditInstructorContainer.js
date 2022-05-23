import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditInstructorView from '../views/EditInstructorView';
import { editInstructorThunk } from '../../store/thunks';



class EditInstructorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.location.state.firstname,
            lastName: this.props.location.state.lastname,
            department: this.props.location.state.department,
            imageUrl: this.props.location.state.imageUrl,
            redirect: false,
            redirectId: null
        }
    }
   
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let instructor = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
        };

        //let newInstructor = await this.props.addInstructor(instructor);

        let instructorId = this.props.location.state.id
        await this.props.editInstructor({id: instructorId, ...instructor});

        this.setState({
            redirect: true,
            //redirectId: newInstructor.id
        });
    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/instructor/${this.props.location.state.id}`} />)
        }
        return (
            <EditInstructorView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                firstname={this.props.location.state.firstname}
                lastname={this.props.location.state.lastname}
                department={this.props.location.state.department}
                imageUrl={this.props.location.state.imageUrl}
            />
        )
    }

}

// map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
    };
};


export default connect(null, mapDispatch)(EditInstructorContainer);