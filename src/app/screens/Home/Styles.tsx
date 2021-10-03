import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { IBreakpoint } from '../../hooks/useWindowSize';
import { AppColors } from '../../utils/appColors';
// import waves from '../../assets/svg/waves.svg';

interface HomeProps {
  theme: IAppTheme;
  responsive: boolean;
  breakpoint: IBreakpoint;
}

export const HomeStyles = styled.div<HomeProps>`
  section.top {
    margin: ${({ responsive }) => (responsive ? '0 1rem' : '0 5vmax')};
    border: 1px solid ${({ theme }) => AppColors(theme).text};

    display: grid;
    grid-template-columns: ${({ responsive }) => (responsive ? '1fr' : '1fr 1fr')};

    margin-bottom: -100px;
    h1 {
      font-size: 7vmin;
      margin-block: 2rem;
    }
    .code {
      display: inline-block;
    }
    .waves {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 0;
    }
  }

  section.projects {
    /* margin-top: -100px; */
  }
  section.about {
    margin-top: -100px;

    img {
      border-radius: 50%;
      transform: rotate(-20deg);
    }
  }
  section.contact {
  }
`;

/* .hero-container {
    width: 100vw;
    background-color: #000;
    img {
      max-height: 600px;
    }
  } */
