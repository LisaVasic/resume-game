import React, { useState } from 'react';
import styled from 'styled-components';
import { Buttons, OuterContainer, InnerContainer, IntroContainer, ProblemContainer } from 'GlobalStyles';

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
        <IntroContainer>
          <h1>Schysst kollega</h1>
          <p>Lorem ispum bla vla vlas.</p>
          <img src="/assets/images/imgLev1.png" alt="working lady" />
        </IntroContainer>
        <ProblemContainer>
          <p>Scenario - vad gör jag!</p>
          <RadioButtonContainer>
            <input name="option" type="radio" value="wrong" onChange={handleInputChange} /> Option 1
            <input name="option" type="radio" value="wrong" onChange={handleInputChange} /> Option 2
            <input name="option" type="radio" value="correct" onChange={handleInputChange} /> Option 3
          </RadioButtonContainer>
          {isCorrect === true && <p>Correct!</p>}
          {isCorrect === false && <p>Try again!</p>}
        </ProblemContainer>
        <Buttons type="submit" id="guessSubmit" onClick={handleSubmit}>Submit</Buttons>
      </InnerContainer>
    </OuterContainer>
  )
}

export const RadioButtonContainer = styled.div`

`;