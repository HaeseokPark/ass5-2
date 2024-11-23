import React, { useState, useRef } from 'react';
import axios from 'axios';

const Create = ({ fetchData }) => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [gender, setGender] = useState('');
  
  const nameRef = useRef();
  const jobRef = useRef();
  const genderRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 유효성 체크
    if (!name || !job || !gender) {
      if (!name) nameRef.current.focus();
      else if (!job) jobRef.current.focus();
      else if (!gender) genderRef.current.focus();
      return;
    }

    await axios.post('https://67281910270bd0b9755455b4.mockapi.io/api/v1/book', { name, job, gender });
    fetchData();
    setName('');
    setJob('');
    setGender('');
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded bg-light mb-4">
      <h3 className="mb-3">Create New Item</h3>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input 
          ref={nameRef} 
          className="form-control" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter name" 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Job</label>
        <input 
          ref={jobRef} 
          className="form-control" 
          value={job} 
          onChange={(e) => setJob(e.target.value)} 
          placeholder="Enter job" 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Gender</label>
        <input 
          ref={genderRef} 
          className="form-control" 
          value={gender} 
          onChange={(e) => setGender(e.target.value)} 
          placeholder="Enter gender" 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default Create;
