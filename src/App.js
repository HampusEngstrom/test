import React, { useState, useEffect } from 'react';
import { List } from './components';
import axios from 'axios';
import { ConditionalRender, LoadingSpinner } from './components';
import './App.css';
const URL = 'https://api.tretton37.com/ninjas';

function App() {
  const [colleagues, setColleagues] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios(URL).then(({ data }) => {
      setColleagues(data);
      setIsFetching(false);
    });
  }, []);

  return (
    <div className="App">
      <ConditionalRender
        condition={!isFetching}
        fallback={<LoadingSpinner />}
      >
        <List items={colleagues} />
      </ConditionalRender>
    </div>
  );
}

export default App;
