function RecordList ({records}) {
    return (
        <div>
            {records.map((record) => (
                <div key={record.id}>
                    <h2>{record.title}</h2>
                    <p>{record.description}</p>
                </div>
            ))}
        </div>
                
    )
}   

export default RecordList