import styled from 'styled-components';

export const Styles = styled.div`
  .hero-container {
    width: 100vw;
    background-color: #000;
    img {
      max-height: 600px;
    }
  }
  .heading-container {
    position: absolute;
    width: 100vw;
    /* border: 1px solid #f00; */

    top: 5rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;

    h1 {
      font-size: 3rem;
      margin: 0;
    }

    h2 {
      margin: 0;

      div {
        display: inline-block;
      }
    }
  }
`;
