import React, { useState } from 'react';
import styled from 'styled-components';

export const LevelThree = () => {
  const correctPath = ['step1', 'step2', 'step5', 'step8', 'step9']
  const [currentStep, setCurrentStep] = useState(0);
  const [clickedSteps, setClickedSteps] = useState([]);

  const handleStep = (value) => {
    if (value === correctPath[currentStep]) {
      setCurrentStep(currentStep + 1); // Move to the next step
      const newSteps = clickedSteps.concat(value); // Add the new step to the array
      setClickedSteps(newSteps); // Update the state with the new array
    } else {
      setCurrentStep(0); // Reset if the user clicks the wrong step
      setClickedSteps([]); // Reset the array
      alert('Sorry, try again!')
    }
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <h1>Rubrik</h1>
        <p>Förklaring</p>
        <GameBoard>
          <Circle isActive={clickedSteps.includes('step1')} onClick={() => handleStep('step1')} />
          <Circle isActive={clickedSteps.includes('step2')} onClick={() => handleStep('step2')} />
          <Circle isActive={clickedSteps.includes('step3')} onClick={() => handleStep('step3')} />
          <Circle isActive={clickedSteps.includes('step4')} onClick={() => handleStep('step4')} />
          <Circle isActive={clickedSteps.includes('step5')} onClick={() => handleStep('step5')} />
          <Circle isActive={clickedSteps.includes('step6')} onClick={() => handleStep('step6')} />
          <Circle isActive={clickedSteps.includes('step7')} onClick={() => handleStep('step7')} />
          <Circle isActive={clickedSteps.includes('step8')} onClick={() => handleStep('step8')} />
          <Circle isActive={clickedSteps.includes('step9')} onClick={() => handleStep('step9')} />
        </GameBoard>
      </InnerContainer>
    </OuterContainer>
  )
}

export const OuterContainer = styled.div`
border: solid 2px blue;
background-color: pink;

`;

export const InnerContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
background-color: grey;
`;

export const GameBoard = styled.div`
width: 50%;
background-color: beige;
  display: grid;
  justify-content: center;
  border: solid 2px black;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 20px;
  padding:20px;
`;

export const Circle = styled.div`
border: solid 1px black;
border-radius: 50%;
background-color: ${(props) => (props.isActive ? 'green' : 'white')}; /* Change color dynamically */
`;
