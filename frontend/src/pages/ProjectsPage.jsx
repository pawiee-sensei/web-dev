import { useEffect, useState } from 'react'
import RecordForm from '../components/projects/RecordForm.jsx'
import RecordList from '../components/projects/RecordList.jsx'
import { createRecord, getRecords } from '../services/record.js'

function ProjectsPage() {
    // Component state must live inside the component function.
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    })
    const [activeTab, setActiveTab] = useState('')
    const [records, setRecords] = useState([])

    // Update the matching field as the user types.
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }

    // Create a record, add it to the list, then clear the form.
    const handleSubmit = async (event) => {
        event.preventDefault()

        const newRecord = await createRecord(formData)
        setRecords((current) => [newRecord, ...current])
        setFormData({
            title: '',
            description: '',
        })
    }

    // Load existing records when the page first renders.
    useEffect(() => {
        const loadRecords = async () => {
            const data = await getRecords()
            setRecords(data)
        }

        loadRecords()
    }, [])

    return (
        <section className="projects-page">
            <div className="project-tabs">
                <button
                     className="tab-button"
                     type="button"
                     onClick={() => setActiveTab('crud')}
                     >
                    CRUD
                </button>
            </div>

            {activeTab === 'crud' && (
                <>
                    <RecordForm
                        formData={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                    <RecordList records={records} />
                </>
            )}
        </section>
    )
}

export default ProjectsPage
