import styled from 'styled-components';

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
  width: 90%;
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

