import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './components/Create';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    const response = await axios.get('https://67281910270bd0b9755455b4.mockapi.io/api/v1/book'); // 실제 API URL로 대체
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>CRUD Application</h1>
      <Create fetchData={fetchData} />
      <Update data={data} fetchData={fetchData} />
    </div>
  );
};

export default App;
