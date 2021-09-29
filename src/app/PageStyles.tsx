import styled from 'styled-components';
import { IAppTheme } from './hooks/ThemeContext';
import { AppColors } from './styles/appColors';

export const PageStyles = styled.main<{ theme: IAppTheme }>`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding-top: 40px;

  /* border: 1px solid #fff; */
  color: ${({ theme }) => AppColors(theme).text};
  background-color: ${({ theme }) => AppColors(theme).mainBg};

  text-align: center;
  font-size: 1rem;

  button {
    color: #fff;
    background: transparent;
    cursor: pointer;
  }

  a {
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 10px #fff;
    }
  }
`;
