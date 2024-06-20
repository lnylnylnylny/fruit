import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ onReset }) {
  const navigate = useNavigate();

  const handleFruitClick = () => {
    onReset();
    navigate('/fruit');
  };


  return (
    <div>
      <h1>과일 가격 변동 게임</h1>
      <button onClick={handleFruitClick}>시작</button>
    </div>
  );
}

export default Home;
