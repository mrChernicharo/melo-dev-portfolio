import styled from 'styled-components';
import { IBreakpoint } from '../../hooks/useWindowSize';

export const Styles = styled.div<{ breakpoint: IBreakpoint }>`
  .skillList {
    display: grid;
    grid-template-columns: ${({ breakpoint }) => {
      switch (breakpoint) {
        case 'mobile':
          return 'repeat(4, 1fr)';
        case 'tablet':
          return 'repeat(6, 1fr)';
        case 'desktop':
          return 'repeat(10, 1fr)';
        case 'wide':
          return 'repeat(12, 1fr)';
      }
    }};

    .skill-div {
      /* border: 1px solid; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.75rem;

      img {
        max-width: 40px;
        max-height: 40px;
      }
    }
  }
`;
