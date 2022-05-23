

const EditInstructorView = (props) => {
    const { handleChange, handleSubmit, firstname, lastname, department, imageUrl } = props;

    return (
        <div className="root">
            <div className="formContainer">
                <div className="formTitle">
                    <h2 style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                        Edit Instructor
                    </h2>
                </div>
                <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>First name: </label>
                    <input type="text" name="firstName" defaultValue={firstname} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last name: </label>
                    <input type="text" name="lastName" defaultValue={lastname} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Department: </label>
                    <input type="text" name="department" defaultValue={department} onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>imageUrl: </label>
                    <input type="text" name="imageUrl" defaultValue={imageUrl} onChange={(e) => handleChange(e)} />
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



export default EditInstructorView;