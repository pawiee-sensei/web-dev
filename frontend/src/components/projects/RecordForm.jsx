function RecordForm({ formData, onChange, onSubmit }) {
  return (
    <form className="auth-card" onSubmit={onSubmit}>
      <div className="auth-card-header">
        <h2>Create Record</h2>
        <p>Fill in the details below.</p>
      </div>

      <label className="field">
        <span>Title</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onChange}
          placeholder="Title"
        />
      </label>

      <label className="field">
        <span>Description</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="Description"
        />
      </label>

      <button className="primary-button" type="submit">
        Create
      </button>
    </form>
  )
}


export default RecordForm