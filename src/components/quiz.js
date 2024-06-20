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
      question: '증강현실 기술 예시로 아닌 것은?',
      options: ['AR 시뮬레이션', 'AR 콜라보레이션', 'AR인포메이션', 'VR트레이닝'],
      answer: 'VR트레이닝'
    },
    {
      question: '디지털 세상에서 만들어지는 데이터로 다양한 종류를 포함하는 양이 매우 많은 데이터는?',
      options: ['인공지능', '빅데이터', 'IoT', '스마트폰'],
      answer: '빅데이터'
    },
    {
      question: '우리가 여태까지 실습했던 활동 중 아닌 것은?',
      options: ['Light Bot', '코드업', 'realpython', '아키네이터'],
      answer: 'realpython'
    },
    {
      question: '4.24의 변수의 알맞은 자료형은 무엇일까요?',
      options: ['int', 'chr', 'float', 'char'],
      answer: 'float'
    },
    {
      question: '파이썬의 언어 중 리스트를 표현하는 기호는?',
      options: ['[ ]',' { }', '( )', '" "'],
      answer: '[ ]'
    },
    {
      question: '조건문으로 사용되지 않은 파이썬 언어는?',
      options: ['if' , 'elseif', 'elif', 'else'],
      answer: 'elseif'
    },
    {
      question: '반복문에 이용되는 파이썬 코드는?',
      options: ['fore','with', 'while','next'],
      answer: ['while']
    },
    {
      question: '컴퓨터가 수많은 데이터를 바탕으로 학습하여 스스로 규칙을 찾아내도록 하는 인공지능 기술은?',
      options: ['Machine Learning', 'Mechine Learning', 'Machain Learning', 'Mashine Learning'],
      answer: 'Machine Learning'
    },
    {
      question: '산점도 나오는 그래프 코드는?',
      options: ['pie', 'plot', 'colorbar','scatter'],
      answer: 'scatter'
    },
    {
      question: '머신러닝의 방법에 알맞지 않은 것은?',
      options: ['지도학습','강력학습','비지도학습','강화학습'],
      answer: '강력학습'
    },
    {
      question: '5초안에 4명의 선생님 이름을 말하세요.',
      options: ['정답'],
      answer: '이나영, 박승미, 최여진, 방지현'
    },
    {
      question: '파이썬의 영어 스펠링을 말하세요.',
      options: ['정답'],
      answer: 'PYTHON'
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
        <div className="answer">
          <h3>정답: {questions[currentQuestionIndex].answer}</h3>
          <button onClick={handleNextClick}>되돌아가기</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
