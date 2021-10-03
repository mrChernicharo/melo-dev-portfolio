import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

interface ButtonStyleProps {
  theme: IAppTheme;
}

export const ButtonContainer = styled.div<ButtonStyleProps>`
  margin-left: 0.25rem;

  button {
    display: flex;
    align-items: center;

    font-weight: bold;
    background: ${({ theme }) => AppColors(theme).primary};
    color: ${({ theme }) => AppColors(theme).buttonText};

    border: none;
    border-radius: 14px;

    width: auto;
    padding: 0.5rem;
    opacity: 1;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
