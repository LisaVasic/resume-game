import React, { useState } from 'react';
import styled from 'styled-components';

export const LevelThree = () => {
  const correctPath = ['step1', 'step2', 'step5', 'step8', 'step9']
  const [currentStep, setCurrentStep] = useState(0);

  const handleStep = (value) => {
    if (value === correctPath[currentStep]) {
      setCurrentStep(currentStep + 1); // Move to the next step
      alert('yes');
    } else {
      setCurrentStep(0); // Reset if the user clicks the wrong step
      alert('no')
    }
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <h1>Rubrik</h1>
        <p>Förklaring</p>
        <GameBoard>
          <Circle onClick={() => handleStep('step1')} />
          <Circle onClick={() => handleStep('step2')} />
          <Circle onClick={() => handleStep('step3')} />
          <Circle onClick={() => handleStep('step4')} />
          <Circle onClick={() => handleStep('step5')} />
          <Circle onClick={() => handleStep('step6')} />
          <Circle onClick={() => handleStep('step7')} />
          <Circle onClick={() => handleStep('step8')} />
          <Circle onClick={() => handleStep('step9')} />
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
border: solid 5px blue;
border-radius: 50%;


`;
