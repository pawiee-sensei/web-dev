function personForm({ personInfo, onChange, onSubmit }) {
    return (
        <form className="auth-card" onSubmit={onSubmit}>
            <div className="auth-card-header">
                <h2>Personal info</h2>
                <p>Fill in the details below.</p>
            </div>

        <label className="field">
            <span>Name</span>
            <input
                type="text" 
                name="name"
                value={personInfo.name}
                onChange={onChange}
                placeholder="Name"
            />
        </label>

        <label className="field">
            <span>Age</span>
            <input
                type="number"
                name="age"
                value={personInfo.age}
                onChange={onChange}
                placeholder="age"
            />
        </label>

        <label className="field">
            <span>Gender</span>
            <input
                type="text"
                name="gender"
                value={personInfo.gender}
                onChange={onChange}
                placeholder="gender"
            />
        </label>

        <button className="primary-button" type="submit">Submit</button>
        </form>
    )
}

export default personForm

