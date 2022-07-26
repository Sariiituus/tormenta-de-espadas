import React from "react";
import "./Quiz.scss";
import questions from "./QuizQuestions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Quiz = ({questions}) => {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  let navigate = useNavigate();

  const handleAnswerSubmit = (isCorrect, ev) => {
    if (isCorrect) setScore(score +1);
    ev.target.classList.add(isCorrect ? "correct" : "wrong");
    
    setTimeout(() => { 
      if (actualQuestion === questions.length - 1) {
      setIsFinished(true);
    } else {
      setActualQuestion(actualQuestion + 1);
    } 
    }, 800);
  }
  
  

const results = () => {
  if (score <= 2 ) 
    return (
      <p className="results-d">Ponte a estudiar, ¡mentecato!</p>
    ) 
   if (score >= 3 && score <= 5)
  return (
    <p className="results-c">Aún debes estudiar más la historia de Poniente para poder competir con los maestres</p>
  ) 
  if (score >= 6 && score <= 8)
  return (
    <p className="results-b">Tus conocimientos sobre los Siete Reinos son envidiables, ¡sigue mejorando!</p>
  )
  if (score >= 9)
  return (
    <p className="results-a">Ya eres un Gran Maestre, ¡estás preparado para el Concilio!</p>
  )
}

  if (isFinished) {
  
  return (
    <div className="quiz">
      <div className="game-over">
        <span>Has acertado {score} de {questions.length} preguntas</span>
        <div className="results">{results()}</div>
        <br />
        <div className="btn-box">
        <button className="results-btn" onClick={() => navigate('/quiz')}>Reiniciar</button>
        <button className="results-btn" onClick={() => navigate('/character-profile')}>Cerrar</button>
        </div>
      </div>
    </div>
  )}

  return (
    <div className="quiz">
    <div className="game-box">
      <div className="question-box">
        <div className="question-number">
          <span> Pregunta {actualQuestion + 1} de </span> {questions.length}
        </div>
        <div className="question-title">{questions[actualQuestion].title}</div>
      </div>
      <div className="choice-box">
        {questions[actualQuestion].choices.map((choice) => (
          <button className="answer-btn" key={choice.answer} onClick={(ev) => handleAnswerSubmit(choice.isCorrect, ev)}>
            {choice.answer}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Quiz;
