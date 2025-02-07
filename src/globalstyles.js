import { styled, createGlobalStyle } from 'styled-components';

// Styling for mobile

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Pacifico&display=swap');

  body {
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    color: #356D65;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  background-color: #F7ECDF;
  width: 400px;
  height: 100%;
  // min-height: 90%;
  border-radius: 5px;
  padding: 20px;

  p{
   font-size: 20px;
  }
`;

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 85%;
  heigt:auto;
  margin-top: 20px;
  text-align: center;

h1 {
  font-size: 45px;
  font-weight: 800;
  grid-column: span 2;
  margin: 10px;
  }

  p {
  grid-column: 1;
  text-align: left;
  }

  img {
  grid-column: 2;
  height: auto;
  width: 100%;
  padding: 10px;
  }
`;

export const ProblemContainer = styled.div`
  background-color: #F1CBB5;
  border-radius: 20px;
  width: 85%;
  min-height: auto;
  height: auto;
  padding: 20px;
  overflow: auto;

  p {
   margin-bottom: 20px;
  }

  pre{
   color: #DE7E5D;
   font-size: 12px;
   word-wrap: break-word;
  }
`;

export const Buttons = styled.button`
  background-color: #356D65;
  width: 70%;
  margin: 20px auto;
  color: #ffff;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
`;

