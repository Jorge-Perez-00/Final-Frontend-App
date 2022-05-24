import "../../css/Forms.css"


const EditCourseView = (props) => {
    const { handleChange, handleSubmit, title, timeslot, location } = props;

    return (
        <div className="main">
            <div className="formContainer">
                <div className="formTitle">
                    <h1 className="title">
                        Edit Course
                    </h1>
                </div>
                <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label>Title: </label>
                    <input type="text" name="title" defaultValue={title} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label>Timeslot: </label>
                    <input type="text" name="timeslot" defaultValue={timeslot} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label>Location: </label>
                    <input type="text" name="location" defaultValue={location} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />


                    <button type="submit" className="submitButton">
                        Submit
                    </button>
                    <br />
                    <br />
                </form>
            </div>
        </div>

    )
}



export default EditCourseView;