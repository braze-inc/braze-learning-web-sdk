import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import ContentCards from './pages/ContentCards';
import * as braze from "@braze/web-sdk";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    braze.subscribeToContentCardsUpdates(function (event) {
      setCards(event.cards);
    });
    braze.requestContentCardsRefresh();

    
    braze.openSession();

  }, [setCards]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/contentcards' element={<ContentCards cards={cards} />} />
      </Routes>
    </Router>
  );
}

export default App;