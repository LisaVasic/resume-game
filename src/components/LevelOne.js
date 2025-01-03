import React, { useState } from 'react';
import styled from 'styled-components';
import { Buttons, OuterContainer, InnerContainer, IntroContainer, ProblemContainer } from 'GlobalStyles';
// import img from 'public/assets/images/imgLev1.png';

const correctAnswerOne = 'ageToCheck';
const correctAnswerTwo = 'boolean'

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
    // Reset previous messages
    setIsCorrect(false);
    setIsFalse(false);
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

  return (
    <OuterContainer>
      <InnerContainer>
        <IntroContainer>
          <h1>Problemlösare</h1>
          <p>15 års erfarenhet av kreativ problemlösning.</p>
          <img src="/assets/images/imgLev1.png" alt="working lady" />
        </IntroContainer>
        <ProblemContainer>
          <p>Fyll i luckorna för att slutföra TypeScript-koden</p>
          <pre>
            {'let age = 25;\n\nfunction isAdult('}
            <Input type="text" name="blankOne" value={inputValue.blankOne} onChange={handleInputChange} /> {/* param */}
            {'): '}
            <Input type="text" name="blankTwo" value={inputValue.blankTwo} onChange={handleInputChange} /> {/* return type */}
            {'\n {\n  return age >= 18;\n }'}
          </pre>
        </ProblemContainer>
        {isCorrect && <p>Rätt, snyggt jobbat!</p>}
        {isfalse && <p>Tyvärr, försök igen!</p>}
        <Buttons type="submit" id="guessSubmit" onClick={handleSubmit}>Kör</Buttons>
      </InnerContainer>
    </OuterContainer>
  );
}

// STYLING, MOBILE FIRST

export const Input = styled.input`
width: 60px;
border: none;
opacity: 40%;
border-radius: 5px;
`;