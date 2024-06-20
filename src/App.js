import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Fruit from './components/fruit';
import Home from './components/home';
import Quiz from './components/quiz';

function App() {
  const [prices, setPrices] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [week, setWeek] = useState(1);

  const handlePriceChange = (newPrices) => {
    setPrices(newPrices);
  };

  const handleHiddenCard = () => {
    const randomCard = Math.random() < 0.5 ? 'up' : 'down';
    const adjustedPrices = prices.map(price => {
      const adjustment = Math.floor(Math.random() * 2000) + 1000;
      return randomCard === 'up' ? price + adjustment : price - adjustment;
    });
    setPrices(adjustedPrices);
  };

  const handleHome = () => {
    setCurrentQuestionIndex(0);
    setWeek(1);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onReset={handleHome} />} />
        <Route path="/fruit" element={<Fruit handlePriceChange={handlePriceChange} week={week} setWeek={setWeek} />} />
        <Route 
          path="/quiz" 
          element={<Quiz 
            currentQuestionIndex={currentQuestionIndex} 
            setCurrentQuestionIndex={setCurrentQuestionIndex} 
            handleHiddenCard={handleHiddenCard} 
          />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
