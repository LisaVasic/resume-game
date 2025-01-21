/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Buttons, OuterContainer, InnerContainer, IntroContainer, ProblemContainer } from 'GlobalStyles';

export const LevelTwo = () => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsCorrect(null);
  }

  const handleSubmit = () => {
    if (inputValue === 'correct') {
      setIsCorrect(true);
      isCorrect(true)
    } else {
      setIsCorrect(false);
    }
  }

  const handleNextQuestion = () => {
    // Navigate to next page
    navigate('/levelThree');
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <IntroContainer>
          <h1>Schysst kollega</h1>
          <p>lorem ipsum bla bla bla</p>
          <img src="/assets/images/imgLev1.png" alt="working lady" />
        </IntroContainer>
        <ProblemContainer>
          <p>En kollega har en dålig morgon och är stressad över dagens deadlines.
            Vad gör jag?
          </p>
          <RadioButtonContainer>
            <div>
              <input name="option" id="option1" type="radio" value="wrong" onChange={handleInputChange} />
              <Op htmlFor="option1"> option 1 </Op>
            </div>
            <div>
              <input name="option" id="option2" type="radio" value="wrong" onChange={handleInputChange} />
              <Op htmlFor="option2"> option 2 </Op>
            </div>
            <div>
              <input name="option" id="option3" type="radio" value="correct" onChange={handleInputChange} />
              <Op htmlFor="option3"> option 3 </Op>
            </div>
          </RadioButtonContainer>
        </ProblemContainer>
        {isCorrect === true && <p>Hurra! Det stämmer bra.</p>}
        {isCorrect === false && <p>Gissa igen!</p>}

        {!isCorrect ? (
          <Buttons type="submit" id="guessSubmit" onClick={handleSubmit}>OK</Buttons>
        ) : (
          <Buttons type="button" id="nextQuestion" onClick={handleNextQuestion}>Gå vidare</Buttons> // "Gå vidare" when answered correctly
        )}

      </InnerContainer>
    </OuterContainer>
  )
}

// LOCAL STYLING, MOBILE FIRST

export const RadioButtonContainer = styled.form`
display: flex;
flex-direction: column;

input {
display: none;  /* Hides original radio buttons */
}`;

export const Op = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  margin-bottom: 10px;
  
    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
      background-color: #ffff;
      border: 1.5px solid #356D65;
      border-radius: 3px;
      transition: background-color 0.3s ease, border-color 0.3s ease;
   }
  
   input[type="radio"]:checked + &::before {
    content: '✔';
    color: #356D65;
  }
`;