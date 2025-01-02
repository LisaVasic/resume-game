import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Pacifico&display=swap');

  body {
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
  }
`;

// mobile first

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F7ECDF;
  width: 400px;
  height: 800px;
  margin: auto;
  border-radius: 5px;
`;

export const ProblemContainer = styled.div`
  background-color: #F1CBB5;
  border-radius: 5px;
  width: 80%;
  padding: 15px;
  font-size: 12px;
`;

export const Buttons = styled.button`
  background-color: #356D65;
  width: 50%;
  margin-top: 20px;
  color: #ffff;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 800;
`;

