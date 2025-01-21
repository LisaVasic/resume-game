import React from 'react';
import styled from 'styled-components';
import { OuterContainer, InnerContainer, IntroContainer } from 'GlobalStyles';

export const Endpage = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <IntroContainer>
          <h1>Grattis!</h1>
        </IntroContainer>
        <p>Sammanfattning.</p>
        <Image src="/assets/images/imgLev1.png" alt="working lady" />
      </InnerContainer>
    </OuterContainer>
  )
};

export const Image = styled.img`
  width: 80%;
  padding: 20px;
  margin-bottom: 50px;
`