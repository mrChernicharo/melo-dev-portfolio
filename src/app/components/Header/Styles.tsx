import styled from 'styled-components';

export const Styles = styled.header`
  border: 1px solid #fff;
  width: 100%;

  position: fixed;
  top: 0;

  display: grid;
  grid-template-columns: 100px 1fr 180px 80px;
  align-items: center;

  .react-switch-bg > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
