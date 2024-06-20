import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Quiz = ({ currentQuestionIndex, setCurrentQuestionIndex, handleHiddenCard }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const questions = [
    {
      question: '출력을 하는 파이썬 코드는?',
      options: ['print', 'pint', 'copy', 'talk'],
      answer: 'print'
    },
    {
      question: '바나나의 현재 가격은 얼마입니까?',
      options: ['1$', '2$', '3$', '4$'],
      answer: '1$'
    },
    {
      question: '체리의 현재 가격은 얼마입니까?',
      options: ['1$', '2$', '3$', '4$'],
      answer: '3$'
    }
  ];

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextClick = () => {
    handleHiddenCard();
    setShowAnswer(false);
    setSelectedOption(null);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCurrentQuestionIndex(0); // 마지막 문제 이후에는 첫 번째 문제로 돌아갑니다.
    }
    navigate('/fruit');
  };

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option) => (
        <button onClick={() => handleAnswerOptionClick(option)} key={option}>
          {option}
        </button>
      ))}
      {showAnswer && (
        <div>
          <h3>정답: {questions[currentQuestionIndex].answer}</h3>
          <button onClick={handleNextClick}>되돌아가기</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
