import { styled, createGlobalStyle } from 'styled-components';

// MOBILE FIRST

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
  align-content: stretch;
  align-items: center;
  margin: auto;
  background-color: #F7ECDF;
  width: 400px;
  height: 800px;
  border-radius: 5px;

  p{
   font-size: 20px;
  }
`;

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
  justify-content: stretch;
  width: 80%;

h1 {
  font-size: 45px;
  font-weight: 800;
  text-align: center;
  grid-column: 1 / 3;
  }

  p {
  grid-column: 1 / 2;
  }

  img {
  grid-column: 2 / 3;
  width: 100%;
  padding: 20px;
  }
`;

export const ProblemContainer = styled.div`
  background-color: #F1CBB5;
  border-radius: 20px;
  width: 75%;
  padding: 30px;
  overflow-wrap: normal;

  p {
   margin-bottom: 50px;
  }

  pre{
   color: #DE7E5D;
   font-size: 15px;
  }
`;

export const Buttons = styled.button`
  background-color: #356D65;
  width: 70%;
  margin-bottom: 100px;
  margin-top: 20px;
  color: #ffff;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
`;

