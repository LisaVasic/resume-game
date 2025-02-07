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

  const avatarSteps = {
    step1: { row: 0, col: 0 },
    step2: { row: 0, col: 1 },
    step3: { row: 0, col: 2 },
    step4: { row: 1, col: 0 },
    step5: { row: 1, col: 1 },
    step6: { row: 1, col: 2 },
    step7: { row: 2, col: 0 },
    step8: { row: 2, col: 1 },
    step9: { row: 2, col: 2 }
  };

  // const [avatarPosition, setAvatarPosition] = useState(avatarSteps[correctPath[0]]);

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
        setCurrentStep((prevStep) => prevStep + 1); // Move to the next step
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
            {Object.keys(avatarSteps).map((step) => (
              <Circle
                key={step}
                isActive={clickedSteps.includes(step)}
                onClick={() => handleStep(step)}
                // eslint-disable-next-line no-nested-ternary
                className={step === 'step1' ? 'start' : step === 'step9' ? 'goal' : ''}
                showAvatar={step === clickedSteps[clickedSteps.length - 1]} />
            ))}
          </GameBoard>
        </ProblemContainer>
        <MessageContainer>
          {errorMessage && <p>{errorMessage}</p>}
        </MessageContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

// Styling for mobile

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
  position: relative;
`;

export const Circle = styled.div`

  background-image: ${(props) => (props.showAvatar ? 'url(\'/assets/images/Brain-img-4.png\')' : 'none')};
  background-size: cover;
  background-position: center;

align-self: center; 
justify-self: center;
border: solid 4px #DE7E5D;
width:70px;
height: 70px;
border-radius: 50%;
background-color: ${(props) => (props.isActive ? '#8bca84' : 'white')}; /* Change color dynamically */
position: relative;


/*&:after {
    content: ${(props) => (props.isActive ? '"😄"' : '""')};;
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  */


&.start::after {
    content: ${(props) => (props.showAvatar ? '""' : '"start"')};
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
    

&.goal::after {
    content: ${(props) => (props.showAvatar ? '""' : '"mål"')};
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

export const Image = styled.img`
  width: 50%;
  padding: 20px;
  margin-bottom: 50px;
`
