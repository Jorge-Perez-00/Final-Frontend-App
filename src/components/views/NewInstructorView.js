

const NewInstructorView = (props) => {
    const { handleChange, handleSubmit } = props;

    return(
        <div className="main">
            <div className="formContainer">
                <div className="formTitle">
                    <h1 className="title">
                        New Instructor
                    </h1>
                </div>
                <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label>First name: </label>
                    <input type="text" name="firstName" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label>Last name: </label>
                    <input type="text" name="lastName" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label>Department: </label>
                    <input type="text" name="department" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label>imageUrl: </label>
                    <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
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



export default NewInstructorView;