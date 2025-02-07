import React from 'react';
import styled from 'styled-components';
import { OuterContainer, InnerContainer, IntroContainer } from './StyledComponents';
import { GlobalStyles } from './GlobalStyles';

export const Endpage = () => {
  return (
    <OuterContainer>
      <GlobalStyles />
      <InnerContainer>
        <IntroContainer>
          <h1>Hurra!</h1>
        </IntroContainer>
        <p>Tack för att du tog dig tid att spela! <br /> Jag ser fram emot att träffa er.</p>
        <Image src="/assets/images/Brain-img-5.png" alt="happy-brain" />
        <Mail href="mailto:lisajoh@icloud.com">lisajoh@icloud.com</Mail>
      </InnerContainer>
    </OuterContainer>
  )
};

export const Image = styled.img`
  width: 80%;
  padding: 20px;
  margin-bottom: 50px;
`

export const Mail = styled.a`
   color: #356D65;
`