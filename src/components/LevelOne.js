import React, { useState } from 'react';

const correctAnswerOne = 'number';

export const LevelOne = () => {
  const [inputValue, setInputValue] = useState(''); // allows us to use and change the user input(value)
  const [submittedValue, setSubmittedValue] = useState('');

  // // Event handler for submit button, so the value changes when clicked
  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Check the submitted answer
  if (submittedValue === correctAnswerOne) {
    alert('Correct');
  }

  return (
    <outerContainer>
      <innerContainer>
        <h1>Explanations</h1>
        <questionContainer>
          Fill in the blanks to complete the TypeScript code:
          <pre>
            {'let age: '}
            <input type="text" value={inputValue} onChange={handleInputChange} /> {/* number */}
            {' = 25;\n\nfunction isAdult('}
            <input type="text" /> {/* ageToCheck :number */}
            {'): boolean {\n  return age >= 18;\n}'}
          </pre>
          <button type="submit" id="guessSubmit" onClick={handleSubmit}>Submit</button>
        </questionContainer>
      </innerContainer>
    </outerContainer>
  );
}