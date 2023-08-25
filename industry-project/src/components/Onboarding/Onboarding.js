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
      <button>Next</button>
    </>
  );
}

export default Onboarding;
