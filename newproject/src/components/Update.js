import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Update = ({ data, fetchData }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [editCount, setEditCount] = useState(0);
  
  const nameRef = useRef();
  const jobRef = useRef();
  const genderRef = useRef();

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
    
    // PUT API 호출
    await axios.put(`https://67281910270bd0b9755455b4.mockapi.io/api/v1/book/${currentItem.id}`, { ...currentItem, [name]: value }); // 실제 API URL로 대체
    setEditCount(editCount + 1);
  };

  const validateAndUpdate = async () => {
    if (!currentItem.name || !currentItem.job || !currentItem.gender) {
      if (!currentItem.name) nameRef.current.focus();
      else if (!currentItem.job) jobRef.current.focus();
      else if (!currentItem.gender) genderRef.current.focus();
      return;
    }
    
    await axios.put(`https://67281910270bd0b9755455b4.mockapi.io/api/v1/book/${currentItem.id}`, currentItem); // 실제 API URL로 대체
    setEditCount(editCount + 1);
  };

  useEffect(() => {
    if (currentItem) {
      validateAndUpdate();
    }
  }, [currentItem]);

  return (
    <div>
      <h2>Update</h2>
      {data.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleEdit(item)}>Edit {item.name}</button>
        </div>
      ))}
      {currentItem && (
        <div>
          <input 
            ref={nameRef} 
            name="name" 
            value={currentItem.name} 
            onChange={handleChange} 
          />
          <input 
            ref={jobRef} 
            name="job" 
            value={currentItem.job} 
            onChange={handleChange} 
          />
          <input 
            ref={genderRef} 
            name="gender" 
            value={currentItem.gender} 
            onChange={handleChange} 
          />
          <p>Total Edits: {editCount}</p>
        </div>
      )}
    </div>
  );
};

export default Update;
