import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Buttons, OuterContainer, InnerContainer, IntroContainer } from 'GlobalStyles';

export const Startpage = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/levelOne');
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <IntroContainer>
          <h1>Hej!</h1>
        </IntroContainer>
        <p>Sammanfattning.</p>
        <Image src="/assets/images/imgLev1.png" alt="working lady" />
        <Buttons type="button" id="startGame" onClick={startGame}>Starta spelet</Buttons>
      </InnerContainer>
    </OuterContainer>
  )
};

export const Image = styled.img`
  width: 80%;
  padding: 20px;
  margin-bottom: 50px;
`