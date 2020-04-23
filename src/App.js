import React, { useState, useEffect } from 'react';
import data from './data';
import { List } from './components';
import './App.css';

function App() {
  const [colleagues, setColleagues] = useState([]);
  useEffect(() => {
    setColleagues(data);
    console.log(data);
  }, []);
  return (
    <div className="App">
      <List items={colleagues}></List>
    </div>
  );
}

export default App;
