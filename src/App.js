import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';
import * as braze from "@braze/web-sdk";

braze.initialize('replace_with_key', {
  baseUrl: "replace_with_endpoint", 
  enableLogging: true,
});

function App() {
  const [cards, setCards] = useState([]);
  const [isPushPromptEligible, setIsPushPromptEligible] = useState(true);

  const requestPushPermission = () => {
    braze.requestPushPermission();
    setIsPushPromptEligible(false);
  }

  useEffect(() => {
    braze.changeUser("aaiduntestagain");

    if (braze.isPushPermissionGranted() === false && braze.isPushBlocked() === false){
      setIsPushPromptEligible(true);
    }

  }, []);

  return (
    <Router>
      <Navbar />
      <PushPermissionContainer>
        <PushPermissionButton onClick={requestPushPermission} disabled={!isPushPromptEligible}>Request Push Permission</PushPermissionButton>
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
