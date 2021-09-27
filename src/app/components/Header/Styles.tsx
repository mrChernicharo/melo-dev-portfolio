import styled from 'styled-components';

export const Styles = styled.header`
  border: 1px solid #fff;
  width: 100%;

  position: fixed;
  top: 0;

  display: grid;
  grid-template-columns: 54px 170px 1fr;
  align-items: center;

  div {
    /* border: 1px solid #fff; */
  }

  .react-switch-bg > div {
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    display: flex;

    /* border: 1px solid #fff; */

    flex-direction: row;
    align-items: center;
    justify-content: end;
  }
`;
