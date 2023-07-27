import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';
import * as braze from "@braze/web-sdk";

braze.initialize('1426ffd5-2add-406f-adde-f8a8dd31cab8', {
  baseUrl: "sdk.iad-01.braze.com", 
  enableLogging: true,
});

function App() {
  const [cards, setCards] = useState([]);
  const [isPushPromptEligible, setIsPushPromptEligible] = useState(true);

  useEffect(() => {
    braze.changeUser("aaiduntestagain");
  }, []);

  return (
    <Router>
      <Navbar />
      <PushPermissionContainer>
        <PushPermissionButton disabled={!isPushPromptEligible}>Request Push Permission</PushPermissionButton>
      </PushPermissionContainer>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/contentcards' element={<ContentCards cards={cards} />} />
      </Routes>
    </Router>
  );
}

const PushPermissionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`;

const PushPermissionButton = styled.button`
    margin-top: 20px;
    margin-right: 20px;
`;

export default App;