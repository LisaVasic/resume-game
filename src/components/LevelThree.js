import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { OuterContainer, InnerContainer, IntroContainer, ProblemContainer } from 'GlobalStyles';

export const LevelThree = () => {
  const correctPath = ['step1', 'step2', 'step5', 'step8', 'step9']
  const [currentStep, setCurrentStep] = useState(0);
  const [clickedSteps, setClickedSteps] = useState([]);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleStep = (value) => {
    if (value === correctPath[currentStep]) {
      const newSteps = clickedSteps.concat(value); // Add the new step to the array
      setClickedSteps(newSteps); // Update the state with the new array

      if (currentStep + 1 === correctPath.length) {
        // If the user finishes the path
        setTimeout(() => {
          navigate('/endpage'); // Navigate to Endpage after a slight delay
        }, 500);
        setErrorMessage('');
      } else {
        setCurrentStep(currentStep + 1); // Move to the next step
        setErrorMessage('');
      }
    } else {
      setCurrentStep(0); // Reset if the user clicks the wrong step
      setClickedSteps([]); // Reset the array
      setErrorMessage('Fel väg, försök igen!');
    }
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <IntroContainer>
          <h1>Rubrik</h1>
          <p>Förklaring</p>
        </IntroContainer>
        <ProblemContainer>
          <p>Hitta rätt väg från start till mål.</p>
          <GameBoard>
            <Circle className="start" isActive={clickedSteps.includes('step1')} onClick={() => handleStep('step1')} />
            <Circle isActive={clickedSteps.includes('step2')} onClick={() => handleStep('step2')} />
            <Circle isActive={clickedSteps.includes('step3')} onClick={() => handleStep('step3')} />
            <Circle isActive={clickedSteps.includes('step4')} onClick={() => handleStep('step4')} />
            <Circle isActive={clickedSteps.includes('step5')} onClick={() => handleStep('step5')} />
            <Circle isActive={clickedSteps.includes('step6')} onClick={() => handleStep('step6')} />
            <Circle isActive={clickedSteps.includes('step7')} onClick={() => handleStep('step7')} />
            <Circle isActive={clickedSteps.includes('step8')} onClick={() => handleStep('step8')} />
            <Circle className="goal" isActive={clickedSteps.includes('step9')} onClick={() => handleStep('step9')} />
          </GameBoard>
        </ProblemContainer>
        <MessageContainer>
          {errorMessage && <p>{errorMessage}</p>}
        </MessageContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

export const GameBoard = styled.div`
  width: 90%;
  background-color: ;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(3, 80px);
  gap: 10px;
  padding:10px;
`;

export const Circle = styled.div`
position: relative;
align-self: center; 
justify-self: center;
border: solid 1px #DE7E5D;
width:70px;
height: 70px;
border-radius: 50%;
background-color: ${(props) => (props.isActive ? '#8bca84' : 'white')}; /* Change color dynamically */

&.start::after {
    content: "start";
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

&.goal::after {
    content: "mål";
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`;

export const MessageContainer = styled.div`
  height: 100px;
`
