import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Fruit({ handlePriceChange, week, setWeek }) {
  const fruits = [
    { name: '수박', emoji: '🍉' },
    { name: '사과', emoji: '🍎' },
    { name: '포도', emoji: '🍇' },
    { name: '오렌지', emoji: '🍊' },
    { name: '체리', emoji: '🍒' },
  ];

  const [prices, setPrices] = useState([]);

  useEffect(() => {
    generateRandomPrices();
  }, []);

  const generateRandomPrices = () => {
    const newPrices = fruits.map(() => {
      const price = Math.floor(Math.random() * 10000) + 1000;
      return Math.floor(price / 1000) * 1000; // 천원 단위로 변환
    });
    setPrices(newPrices);
  };

  useEffect(() => {
    handlePriceChange(prices);
  }, [prices, handlePriceChange]);

  const navigate = useNavigate();

  const handlePriceButtonClick = () => {
    generateRandomPrices();
    setWeek(week + 1);
  };

  const handleQuizButtonClick = () => {
    navigate('/quiz');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleResetWeek = () => {
    setWeek(1); // 초기값으로 설정할 주차를 1로 설정
  };

  return (
    <div>
      <h1>랜덤 과일 가격 게임 - {week}주차</h1>
      <div className="button-container">
        <button onClick={handlePriceButtonClick}>가격 변동</button>
        <button onClick={handleQuizButtonClick}>퀴즈로 이동</button>
        <button onClick={handleResetWeek}>주차 초기화</button>
      </div>
      <div className="fruit-grid">
        {fruits.map((fruit, index) => (
          <div key={index} className="fruit-item">
            <span className="fruit-emoji">{fruit.emoji}</span>
            <span className="fruit-name">{fruit.name}</span>
            <span className="fruit-price">
              {prices[index] ? prices[index].toLocaleString() : '가격 없음'}원
            </span>
          </div>
        ))}
      </div>
      <div className='home-button'>
      <button onClick={handleHomeClick}>
        <span role="img" aria-label="집">🏠</span>
      </button>
    </div>
    </div>
  );
}

export default Fruit;
