import { useEffect, useState } from 'react';
import { createRecord, getRecords } from '../services/record.js';
import { createName } from '../services/singleInput.js';
import { createPerson } from '../services/person.js';
import { createTask, getTasks } from '../services/task.js';


// ========================
// INITIAL VALUES
// ========================
const INITIAL_RECORD_FORM = {
  title: '',
  description: '',
};

const INITIAL_PERSON_FORM = {
  name: '',
  age: '',
  gender: '',
};

const INITIAL_TASK_FORM = {
  title: '',
  details: '',
  priority: 'medium',
  status: 'pending',
  dueDate: '',
}


const INITIAL_SINGLE_INPUT = '';


export function useProjects() {
  // ========================
  // STATE
  // ========================
  const [formData, setFormData] = useState({ ...INITIAL_RECORD_FORM });
  const [records, setRecords] = useState([]);
  const [singleInput, setSingleInput] = useState(INITIAL_SINGLE_INPUT);
  const [personInfo, setPersonInfo] = useState({ ...INITIAL_PERSON_FORM });
  const [tasksform, setTasksForm] = useState({ ...INITIAL_TASK_FORM });

  // ========================
  // GENERIC REQUEST HELPER
  // ========================
  const runRequest = async (requestFn, onSuccess) => {
    try {
      const result = await requestFn();
      onSuccess?.(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  // ========================
  // Change Handlers
  // ========================

  //change handlers for record
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // change handlers for single input
  const handleSingleInputChange = (event) => {
    setSingleInput(event.target.value);
  };

  // change handlers for person
  const handlePersonInputChange = (event) => {
    const { name, value } = event.target;
    setPersonInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTaskChange = (event) => {
    const { name, value } = event.target;
    setTasksForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // ========================
  // RESET
  // ========================

  // reset handlers for record
  const resetRecordForm = () => {
    setFormData({ ...INITIAL_RECORD_FORM });
  };
 // reset handlers for single input
  const resetSingleInput = () => {
    setSingleInput(INITIAL_SINGLE_INPUT);
  };
 // reset handlers for person
  const resetPersonInfo = () => {
    setPersonInfo({ ...INITIAL_PERSON_FORM });
  }

  const resetTaskForm = () => {
    setTasksForm({ ...INITIAL_TASK_FORM });
  }

  // ========================
  // SUBMIT HANDLERS for Record
  // ========================

  // submit handlers for record
  const handleSubmit = (event) => {
    event.preventDefault();

    runRequest(
      () => createRecord(formData),
      (createdRecord) => {
        setRecords((prev) => [createdRecord, ...prev]);
        resetRecordForm();
      }
    );
  };

 // submit handlers for single input
  const handleSingleSubmit = (event) => {
    event.preventDefault();

    runRequest(
      () => createName({ name: singleInput }),
      () => {
        resetSingleInput();
      }
    );
  };

 // submit handlers for person
  const handlePersonSubmit = (event) => {
    event.preventDefault();

    runRequest(
      () => createPerson(personInfo),
      () => {
        resetPersonInfo();
      }
    );
  };

  const handleTaskSubmit = (event) => {
    event.preventDefault();

    runRequest(
      () => createTask(tasksform),
      () => {
        resetTaskForm();
      }
    );
  }

  // ========================
  // EFFECT
  // ========================
  useEffect(() => {
    runRequest(getRecords, setRecords);
  }, []);

  // ========================
  // RETURN
  // ========================
  return {
    formData,
    records,
    singleInput,
    personInfo,
    tasksform,

    handleChange,
    handleSingleInputChange,
    handlePersonInputChange,
    handleTaskChange,

    handleSubmit,
    handleSingleSubmit,
    handlePersonSubmit,
    handleTaskSubmit,
  };
}

export default useProjects