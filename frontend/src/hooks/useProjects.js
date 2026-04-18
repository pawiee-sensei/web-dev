import { useEffect, useState } from 'react';
import { createRecord, getRecords } from '../services/record.js';
import { createName } from '../services/singleInput.js';
import { createPerson } from '../services/person.js';


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



const INITIAL_SINGLE_INPUT = '';

export function useProjects() {
  // ========================
  // STATE
  // ========================
  const [formData, setFormData] = useState({ ...INITIAL_RECORD_FORM });
  const [records, setRecords] = useState([]);
  const [singleInput, setSingleInput] = useState(INITIAL_SINGLE_INPUT);
  const [personInfo, setPersonInfo] = useState({ ...INITIAL_PERSON_FORM });

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
  // Change Handlers for Record
  // ========================
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ========================
  // Change Handlers for Single Input
  // ========================
  const handleSingleInputChange = (event) => {
    setSingleInput(event.target.value);
  };

  // ========================
  // Change Handlers for Person
  // ========================
  const handlePersonInputChange = (event) => {
    const { name, value } = event.target;
    setPersonInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ========================
  // RESET
  // ========================
  const resetRecordForm = () => {
    setFormData({ ...INITIAL_RECORD_FORM });
  };

  const resetSingleInput = () => {
    setSingleInput(INITIAL_SINGLE_INPUT);
  };

  const resetPersonInfo = () => {
    setPersonInfo({ ...INITIAL_PERSON_FORM });
  }

  // ========================
  // SUBMIT HANDLERS for Record
  // ========================
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

  // ========================
  // SUBMIT HANDLERS for Single Input
  // ========================
  const handleSingleSubmit = (event) => {
    event.preventDefault();

    runRequest(
      () => createName({ name: singleInput }),
      () => {
        resetSingleInput();
      }
    );
  };

  // ========================
  // SUBMIT HANDLERS for Person
  // ========================
  const handlePersonSubmit = (event) => {
    event.preventDefault();

    runRequest(
      () => createPerson(personInfo),
      () => {
        resetPersonInfo();
      }
    );
  };

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

    handleChange,
    handleSingleInputChange,
    handlePersonInputChange,

    handleSubmit,
    handleSingleSubmit,
    handlePersonSubmit,
  };
}

export default useProjects