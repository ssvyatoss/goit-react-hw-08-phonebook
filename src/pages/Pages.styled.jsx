import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: burlywood;
  text-align: center;
  max-width: 200px;
  border-radius: 5%;
  padding-bottom: 20px;
  margin: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #4CAF50;
  }
`;