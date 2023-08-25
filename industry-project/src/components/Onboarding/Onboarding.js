import "./Onboarding.scss";

function Onboarding() {
  return (
    <>
      <h1>X</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ?
        </p>
        <input type="submit" value="option 1" />
        <input type="text" value="option 1" />
        <button>option 1</button>
        <label for="question">Select the correct answer:</label>
        <select id="question" name="question">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button>Next</button>
    </>
  );
}

export default Onboarding;
