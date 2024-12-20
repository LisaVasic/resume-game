import React, { useState } from 'react';
import styled from 'styled-components';

export const LevelThree = () => {
  useState(true);
  return (
    <OuterContainer>
      <InnerContainer>
        <h1>Rubrik</h1>
        <p>Förklaring</p>
        <GameBoard>
          <Circle />
        </GameBoard>
      </InnerContainer>
    </OuterContainer>
  )
}

export const OuterContainer = styled.div`

`;

export const InnerContainer = styled.div`
align content: center;
`;

export const GameBoard = styled.div`
  align-content: center;
  border: solid 2px black;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
`;

export const Circle = styled.div`
`;
