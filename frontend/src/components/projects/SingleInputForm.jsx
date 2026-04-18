function SingleInputForm ({  value, onChange, onSubmit}) {
    return (
        <form className="auth-card" onSubmit={onSubmit}>
            <div className="auth-card-header">
                <h2>Single Input</h2>
                <p>Fill in the details below.</p>
            </div>

        <label className="field">
            <span>Name</span>
            <input
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                placeholder="Name"
            />
        </label>

        <button className="primary-button" type="submit">Submit</button>



        </form>
    )
}

export default SingleInputForm