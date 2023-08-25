import "./Onboarding.scss";
import React, { useState, useEffect } from "react";
import questionsData from "../../data/onboarding-question.json";
import { Link } from "react-router-dom";

function Onboarding() {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currQuestion = questionsData[currQuestionIndex];
  const [lastSelectedAnswer, setLastSelectedAnswer] = useState(null);
  const [skippedAnswers, setSkippedAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);

  const handleAnsSelect = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currQuestionIndex]: answer,
    }));
    setLastSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (
      currQuestionIndex < questionsData.length &&
      (answers[currQuestionIndex] || answers[currQuestionIndex] === "Skipped")
    ) {
      if (answers[currQuestionIndex] === "Skipped") {
        setSkippedAnswers((prevSkippedAnswers) => [
          ...prevSkippedAnswers,
          "Skipped",
        ]);
      } else {
        setSkippedAnswers((prevSkippedAnswers) => [
          ...prevSkippedAnswers,
          lastSelectedAnswer,
        ]);
      }
      setCurrQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSkip = () => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currQuestionIndex]: "Skipped",
    }));
    setSkippedAnswers((prevSkippedAnswers) => [
      ...prevSkippedAnswers,
      "Skipped",
    ]);
    setCurrQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currQuestionIndex === questionsData.length) {
      setCompleted(true);
      window.location.href = "/cruise-list";
    }
    console.log(questionsData.length, setCompleted);
  }, [currQuestionIndex]);

  const isContinueDisabled =
    !currQuestion ||
    (!currQuestion.answers.includes(answers[currQuestionIndex]) &&
      answers[currQuestionIndex] !== "Skipped");

  return (
    <main className="onboarding">
      <Link className="onboarding__link" to="/">
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
        <div className="onboarding__buttons">
          <button
            className="onboarding__button-continue"
            onClick={handleNext}
            disabled={isContinueDisabled}
          >
            CONTINUE
          </button>
          <button className="onboarding__button-skip" onClick={handleSkip}>
            SKIP
          </button>
        </div>
      </div>
    </main>
  );
}

export default Onboarding;
