import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ConditionalRender, LoadingSpinner } from './components';
import Colleagues from './layout/Colleagues';
import './App.css';
const URL = 'https://api.tretton37.com/ninjas';

function App() {
  const [allColleagues, setAllColleagues] = useState(true);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios(URL).then(({ data }) => {
      setAllColleagues(data);
      setIsFetching(false);
    });
  }, []);

  return (
    <div className="App">
      <ConditionalRender
        condition={!isFetching}
        fallback={<LoadingSpinner />}
      >
        <Colleagues
          allColleagues={allColleagues}
        />
      </ConditionalRender>
    </div>
  );
}

export default App;
