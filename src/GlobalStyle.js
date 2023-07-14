import styled from 'styled-components';

export const StyledGlobal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    border-width: 2px;
    border-radius: 15%;
    background-color: transparent;
    &:active {
      background-color: blue;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    button {
        margin-left: 10px;
    }
  }
` 
