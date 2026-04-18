function Taskform ({ taskForm, onChange, onSubmit}) {
    return (
        <form className="auth-card" onSubmit={onSubmit}>
            <div className="auth-card-header">
                <h2>Task Form</h2>
                <p>Fill in the details below.</p>
            </div>

            <label className="field">
                <span>Title</span>
                <input
                    type="text"
                    name="title"
                    value={taskForm.title}
                    onChange={onChange}
                    placeholder="Title"
                />
            </label>

            <label className="field">
                <span>details</span>
                <textarea
                    name="details"
                    value={taskForm.details}
                    onChange={onChange}
                    placeholder="details"
                />
            </label>

            <label className = "field">
                <span>priority</span>
                <select
                    name="priority"
                    value={taskForm.priority}
                    onChange={onChange}
                >
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>

            </label>

            <label className = "field">
                <span>status</span>
                <select
                    name="status"
                    value={taskForm.status}
                    onChange={onChange}
                >
                    <option value="pending">pending</option>
                    <option value="inprogress">inprogress</option>
                    <option value="completed">completed</option>
                </select>

            </label>
            
            <label className = "field">
                <span>Due date</span>
                <input
                    type="date"
                    name="dueDate"
                    value={taskForm.dueDate}
                    onChange={onChange}
                    placeholder="Due date"
                />
            </label>

            <button className="primary-button" type="submit">Submit</button>

        </form>
    )
}

export default Taskform