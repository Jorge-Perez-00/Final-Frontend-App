import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';



class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            firstName: "",
            lastName: "",
            department: null,
            imageUrl: null,
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

        let newInstructor = await this.props.addInstructor(instructor);


        this.setState({
            redirect: true,
            redirectId: newInstructor.id
        });
    }


    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/instructor/${this.state.redirectId}`} />)
        }
        return (
            <NewInstructorView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }

}


const mapDispatch = (dispatch) => {
    return ({
        addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
    })
}

export default connect(null, mapDispatch)(NewInstructorContainer);

