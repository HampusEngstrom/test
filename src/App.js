import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ConditionalRender, LoadingSpinner } from './components';
import Colleagues from './layout/Colleagues';
import './App.css';
const URL = 'https://api.tretton37.com/ninjas';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

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
    <Container>
      <ConditionalRender
        condition={!isFetching}
        fallback={<LoadingSpinner />}
      >
        <Colleagues allColleagues={allColleagues} />
      </ConditionalRender>
    </Container>
  );
}

export default App;
