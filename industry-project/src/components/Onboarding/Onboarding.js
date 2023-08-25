import "./Onboarding.scss";
import React, { useState, useEffect } from "react";
import questionsData from "../../data/onboarding-question.json";

function Onboarding() {
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(""); //stores the user's selected answer for the current question.
  const currQuestion = questionsData[currQuestionIndex];

  useEffect(() => {
    //handle submission here?
  }, [currQuestionIndex, answers]);

  //updates the selectedAnswer state when the user selects an answer.
  const handleAnsSelect = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currQuestionIndex]: answer,
    }));
  };

  const handleNextQ = () => {
    if (currQuestionIndex < questionsData.length - 1) {
      setCurrQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <main className="onboarding">
      <h1>X</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ?
        </p>
        <input type="submit" value="option 1" />
        <input type="text" value="option 1" />

        <button>option 1</button>
        {/* form option with radio buttons*/}
        <form>
          <label>
            <input type="radio" name="answer" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="answer" value="option2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="answer" value="option3" />
            Option 3
          </label>
          <button type="submit">Next</button>
        </form>

        {/* button option */}
        <button type="button" class="option-button" data-value="option1">
          Option 1
        </button>
        <button type="button" class="option-button" data-value="option2">
          Option 2
        </button>
        <button type="button" class="option-button" data-value="option3">
          Option 3
        </button>

        {/* dropdown menu option */}
        <label for="question">Select the correct answer:</label>
        <select id="question" name="question">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {/* option checkboxes */}
        <form>
          <label>
            <input type="checkbox" name="answer[]" value="option1" />
            Option 1
          </label>
          <label>
            <input type="checkbox" name="answer[]" value="option2" />
            Option 2
          </label>
          <label>
            <input type="checkbox" name="answer[]" value="option3" />
            Option 3
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {currQuestion && (
          <div>
            <p>{currQuestion.question}</p>
            <ul>
              {currQuestion.answers.map((answer, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      value={answer}
                      checked={answers[currQuestionIndex] === answer}
                      onChange={() => handleAnsSelect(answer)}
                    />
                    {answer}
                  </label>
                </li>
              ))}
            </ul>
            <button onClick={handleNextQ}>Next</button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Onboarding;
