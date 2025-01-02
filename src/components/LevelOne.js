import React, { useState } from 'react';
import styled from 'styled-components';
import { Buttons, InnerContainer, ProblemContainer } from 'GlobalStyles';

const correctAnswerOne = 'number';
const correctAnswerTwo = 'ageToCheck'

// Allows us to use and change the user input(value)
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
        <IntroContainer>
          <h1>Problemlösare</h1>
          <p>Förklaring</p>
        </IntroContainer>
        <ProblemContainer>
          <p>Fill in the blanks to complete the TypeScript code:</p>
          <pre>
            {'let age: '}
            <Input type="text" name="blankOne" value={inputValue.blankOne} onChange={handleInputChange} /> {/* number */}
            {' = 25;\n\nfunction isAdult('}
            <Input type="text" name="blankTwo" value={inputValue.blankTwo} onChange={handleInputChange} /> {/* ageToCheck */}
            {':number): boolean {\n  return age >= 18;\n}'}
          </pre>
        </ProblemContainer>
        {isCorrect && <p>Correct!</p>}
        {isfalse && <p>Try again!</p>}
        <Buttons type="submit" id="guessSubmit" onClick={handleSubmit}>SUBMIT</Buttons>
      </InnerContainer>
    </OuterContainer>
  );
}

// STYLING, MOBILE FIRST

export const OuterContainer = styled.div`

`;

export const IntroContainer = styled.div`

`;

export const Input = styled.input`
width: 70px;
border: none;
opacity: 40%;
border-radius: 5px;
`;