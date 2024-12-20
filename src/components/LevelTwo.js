import React, { useState } from 'react';
import styled from 'styled-components';

export const LevelTwo = () => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsCorrect(null);
  }

  const handleSubmit = () => {
    if (inputValue === 'correct') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  useState(true); // Remove later!
  return (
    <OuterContainer>
      <InnerContainer>
        <h1>Rubrik</h1>
        <p>Förklaring</p>
        <QuestionContainer>
          <p>Scenario - vad gör jag!</p>
          <RadioButtonContainer>
            <input name="option" type="radio" value="wrong" onChange={handleInputChange} /> Option 1
            <input name="option" type="radio" value="wrong" onChange={handleInputChange} /> Option 2
            <input name="option" type="radio" value="correct" onChange={handleInputChange} /> Option 3
          </RadioButtonContainer>
          {isCorrect === true && <p>Correct!</p>}
          {isCorrect === false && <p>Try again!</p>}
          <button type="submit" id="guessSubmit" onClick={handleSubmit}>Submit</button>
        </QuestionContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

export const OuterContainer = styled.div`

`;

export const InnerContainer = styled.div`
`;

export const QuestionContainer = styled.div`

`;

export const RadioButtonContainer = styled.div`

`;