import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from '../globalstyles';
import { OuterContainer, InnerContainer, IntroContainer, ProblemContainer, Buttons } from '../StyledComponents';

const correctAnswerOne = 'number';
const correctAnswerTwo = 'boolean';

// Allows us to use and change the user input(value)
export const LevelOne = () => {
  const [inputValue, setInputValue] = useState({
    blankOne: '',
    blankTwo: ''
  });

  const [isCorrect, setIsCorrect] = useState(false);
  const [isfalse, setIsFalse] = useState(false);
  const navigate = useNavigate();

  // // Event handler for submit button, so the value changes when clicked
  const handleSubmit = () => {
    // Reset previous messages
    setIsCorrect(false);
    setIsFalse(false);
    if (inputValue.blankOne.toLowerCase === correctAnswerOne.toLowerCase
      && inputValue.blankTwo.toLowerCase === correctAnswerTwo.toLowerCase) {
      setIsCorrect(true);
      // isCorrect(true);
    } else {
      setIsFalse(true);
      // isfalse(true);
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

  const handleNextQuestion = () => {
    // Navigate to next page
    navigate('/levelTwo');
  };

  return (
    <OuterContainer>
      <GlobalStyle />
      <InnerContainer>
        <IntroContainer>
          <h1>Kompetent</h1>
          <p>15 år på arbetsmarknaden och gedigen erfarenhet av problemlösning.</p>
          <img src="/assets/images/Brain-img-2.png" alt="thinking-brain" />
        </IntroContainer>
        <ProblemContainer>
          <p>Fyll i luckorna för att slutföra TypeScript-koden</p>
          <pre>
            {'const PersonAge: '}
            <Input type="text" name="blankOne" value={inputValue.blankOne} onChange={handleInputChange} /> {/* param */}
            {'= 25;\n\nfunction isAdult(PersonAge: number): '}
            <Input type="text" name="blankTwo" value={inputValue.blankTwo} onChange={handleInputChange} /> {/* return type */}
            {'\n {\n  return PersonAge >= 18;\n }'}
          </pre>
        </ProblemContainer>
        {isCorrect && <p>Rätt, snyggt jobbat!</p>}
        {isfalse && <p>Tyvärr, försök igen!</p>}

        {/* Two buttons depending if problem is solved or not */}

        {!isCorrect ? (
          <Buttons type="submit" id="guessSubmit" onClick={handleSubmit}>OK</Buttons>
        ) : (
          <Buttons type="button" id="nextQuestion" onClick={handleNextQuestion}>Gå vidare</Buttons> // "Gå vidare" when answered correctly
        )}

      </InnerContainer>
    </OuterContainer>
  );
}

// Styling for mobile

export const Input = styled.input`
width: 40px;
border: none;
opacity: 40%;
border-radius: 5px;
`;