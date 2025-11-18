// SolidStatesQuiz.js
import React from "react";
import "./SolidStatesQuiz.css";

const quizQuestions = [
  {
    question: "Which type of solid has the highest melting point?",
    options: ["Ionic", "Covalent", "Molecular", "Metallic"],
    correct: "Covalent"
  },
  {
    question: "Which is not a characteristic of solid state?",
    options: ["Definite shape", "Definite volume", "Compressibility", "Strong interparticle forces"],
    correct: "Compressibility"
  },
  // You can add more questions similarly
];

const SolidStatesQuiz = () => (
  <div className="quiz-container">
    <h1>Solid States Quiz</h1>
    <form>
      {quizQuestions.map((q, idx) => (
        <div key={idx} className="question-block">
          <p>{q.question}</p>
          {q.options.map((opt, i) => (
            <div key={i}>
              <input type="radio" id={`q${idx}_opt${i}`} name={`q${idx}`} value={opt} />
              <label htmlFor={`q${idx}_opt${i}`}>{opt}</label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default SolidStatesQuiz;
