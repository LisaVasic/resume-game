import React, { useState } from 'react';
import styled from 'styled-components';

export const LevelTwo = () => {
  useState(true); // Remove later!
  return (
    <OuterContainer>
      <InnerContainer>
        <h1>Rubrik</h1>
        <p>Förklaring</p>
        <QuestionContainer>
          <p>Scenario - vad gör jag!</p>
          <RadioButtonContainer>
            <input name="option" type="radio" /> Option 1
            <input name="option" type="radio" /> Option 2
            <input name="option" type="radio" /> Option 3
          </RadioButtonContainer>
          {/* {isCorrect && <p>Correct!</p>} */}
          {/* {isfalse && <p>Try again!</p>} */}
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

`

export const RadioButtonContainer = styled.div`

`;