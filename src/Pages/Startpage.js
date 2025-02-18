import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GlobalStyle } from '../globalstyles';
import { OuterContainer, InnerContainer, IntroContainer, Buttons } from '../StyledComponents';

export const Startpage = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/levelOne');
  };

  return (
    <OuterContainer>
      <GlobalStyle />
      <InnerContainer>
        <IntroContainer>
          <h1>Hej!</h1>
        </IntroContainer>
        <WelcomeMsg>
        Vad kul att du har hittat till mitt CV.
        För att ta reda på lite mer vem jag är och
        vad du får när du anställer mig - klicka dig vidare!
        </WelcomeMsg>
        <Image src="/assets/images/Brain-img-1.png" alt="working lady" />
        <Buttons type="button" id="startGame" onClick={startGame}>Starta spelet</Buttons>
      </InnerContainer>
    </OuterContainer>
  )
};

export const Image = styled.img`
  width: 80%;
  // padding: 20px;
  margin-bottom: 20px;
`

export const WelcomeMsg = styled.p`
  
  padding: 20px;

`