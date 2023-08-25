import "./Onboarding.scss";
import React, { useState, useEffect } from "react";
import questionsData from "../../data/onboarding-question.json";
import { Link } from "react-router-dom";
// import { saveAnsToJson } from "../../utils/utils.js";

function Onboarding() {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currQuestion = questionsData[currQuestionIndex];
  const allSelectedAnswers = answers;

  useEffect(() => {
    // saveAnsToJson(allSelectedAnswers);
  }, [currQuestionIndex, answers]);

  const handleAnsSelect = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currQuestionIndex]: answer,
    }));
  };

  const handleNext = () => {
    if (currQuestionIndex < questionsData.length - 1) {
      setCurrQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleSkip = () => {
    setCurrQuestionIndex((prevIndex) => prevIndex + 1);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currQuestionIndex]: "Skipped",
    }));
  };
  console.log(allSelectedAnswers);
  return (
    <main className="onboarding">
      <Link to="/">
        <h1 className="onboarding__title">X</h1>
      </Link>
      <div className="onboarding__container-main">
        <div className="onboarding__container-secondary">
          {currQuestion && (
            <p className="onboarding__question">{currQuestion.question}</p>
          )}
          <div>
            {currQuestion &&
              currQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  type="button"
                  className={`onboarding__button-option ${
                    answers[currQuestionIndex] === answer
                      ? "onboarding__button-option--selected"
                      : ""
                  }`}
                  onClick={() => handleAnsSelect(answer)}
                >
                  {answer}
                </button>
              ))}
          </div>
        </div>
        <button className="onboarding__button-continue" onClick={handleNext}>
          CONTINUE
        </button>
        <button className="onboarding__button-skip" onClick={handleSkip}>
          SKIP
        </button>
      </div>
    </main>
  );
}

export default Onboarding;
