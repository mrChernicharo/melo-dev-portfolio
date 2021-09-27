import styled from 'styled-components';

export const PageStyles = styled.main`
  text-align: center;
  border: 1px solid #fff;
  box-sizing: border-box;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;

  button {
    color: #fff;
    background: #282c34;
  }

  a {
    transition: 0.3s;

    &:hover {
      text-shadow: 0 0 10px #fff;
    }
  }
`;
