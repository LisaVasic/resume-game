import React, { useState } from 'react';
import styled from 'styled-components';

const correctAnswerOne = 'number';
const correctAnswerTwo = 'ageToCheck'

// allows us to use and change the user input(value)
export const LevelOne = () => {
  const [inputValue, setInputValue] = useState({
    blankOne: '',
    blankTwo: ''
  });

  const [isCorrect, setIsCorrect] = useState(false);
  const [isfalse, setIsFalse] = useState(false);
  // const [submittedValue, setSubmittedValue] = useState(false);

  // // Event handler for submit button, so the value changes when clicked
  const handleSubmit = () => {
    if (inputValue.blankOne === correctAnswerOne && inputValue.blankTwo === correctAnswerTwo) {
      setIsCorrect(true);
    } else {
      setIsFalse(true);
    }
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState, // Copy previous state
      [name]: value // Update the specific field
    }));
  };

  // Check the submitted answer
  // if (inputValue.blankOne === correctAnswerOne
  //     && inputValue.blankTwo === correctAnswerTwo) {
  //   alert('Correct');
  // }

  return (
    <OuterContainer>
      <InnerContainer>
        <h1>Rubrik</h1>
        <p>Förklaring</p>
        <QuestionContainer>
          <p>Fill in the blanks to complete the TypeScript code:</p>
          <pre>
            {'let age: '}
            <input type="text" name="blankOne" value={inputValue.blankOne} onChange={handleInputChange} /> {/* number */}
            {' = 25;\n\nfunction isAdult('}
            <input type="text" name="blankTwo" value={inputValue.blankTwo} onChange={handleInputChange} /> {/* ageToCheck */}
            {':number): boolean {\n  return age >= 18;\n}'}
          </pre>
          {isCorrect && <p>Correct!</p>}
          {isfalse && <p>Try again!</p>}
          <button type="submit" id="guessSubmit" onClick={handleSubmit}>Submit</button>
        </QuestionContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

export const OuterContainer = styled.div`

`;

export const InnerContainer = styled.div`
`;

export const QuestionContainer = styled.div`

`;

