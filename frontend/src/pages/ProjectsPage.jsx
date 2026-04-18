import { useState } from 'react';
import RecordForm from '../components/projects/RecordForm.jsx';
import SingleInputForm from '../components/projects/SingleInputForm.jsx';
import PersonForm from '../components/projects/PersonForm.jsx';
import RecordList from '../components/projects/RecordList.jsx';
import { useProjects } from '../hooks/useProjects.js';

function ProjectsPage() {
  const {
    formData,
    records,
    singleInput,
    personInfo,
    handleRecordChange,
    handleSingleInputChange,
    handlePersonInputChange,
    handleRecordSubmit,
    handleSingleSubmit,
    handlePersonSubmit,
  } = useProjects();

  const [activeTab, setActiveTab] = useState('');

  return (
    <section className="projects-page">
      <div className="project-tabs">
        <button
          className={`tab-button ${activeTab === 'crud' ? 'tab-button-active' : ''}`}
          type="button"
          onClick={() => setActiveTab('crud')}
        >
          CRUD
        </button>

        <button
          className={`tab-button ${activeTab === 'single-input' ? 'tab-button-active' : ''}`}
          type="button"
          onClick={() => setActiveTab('single-input')}
        >
          Single Input
        </button>

        <button
            className={`tab-button ${activeTab === 'person' ? 'tab-button-active' : ''}`}
            type="button"
            onClick={() => setActiveTab('personal-info')}
        >
          Personal info
        </button>

      </div>

      <div className="project-content">
        {activeTab === 'crud' && (
          <>
            <RecordForm
              formData={formData}
              onChange={handleRecordChange}
              onSubmit={handleRecordSubmit}
            />
            <RecordList records={records} />
          </>
        )}

        {activeTab === 'single-input' && (
          <SingleInputForm
            value={singleInput}
            onChange={handleSingleInputChange}
            onSubmit={handleSingleSubmit}
          />
        )}

        {activeTab === 'personal-info' && (
            <PersonForm
                personInfo={personInfo}
                onChange={handlePersonInputChange}
                onSubmit={handlePersonSubmit}
            />  
        )}
      </div>
    </section>
  );
}

export default ProjectsPage;
