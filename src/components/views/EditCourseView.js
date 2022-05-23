
const EditCourseView = (props) => {
    const { handleChange, handleSubmit, title, timeslot, location } = props;

    return (
        <div className="root">
            <div className="formContainer">
                <div className="formTitle">
                    <h2 style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                        Edit Course
                    </h2>
                </div>
                <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Title: </label>
                    <input type="text" name="title" defaultValue={title} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Timeslot: </label>
                    <input type="text" name="timeslot" defaultValue={timeslot} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Location: </label>
                    <input type="text" name="location" defaultValue={location} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />


                    <button type="submit">
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