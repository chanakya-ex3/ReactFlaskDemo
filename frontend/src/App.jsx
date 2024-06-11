import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [datetime, setDatetime] = useState('');

  const fetchDatetime = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/datetime');
    const data = await response.json();
    setDatetime(data.datetime);
  };

  useEffect(() => {
    fetchDatetime();
  }
  , []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Current Date and Time</h1>
        <p>{datetime ? datetime : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
