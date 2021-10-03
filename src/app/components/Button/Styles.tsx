import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../utils/appColors';

interface ButtonStyleProps {
  theme: IAppTheme;
}

export const ButtonContainer = styled.button<ButtonStyleProps>`
  background: ${({ theme }) => AppColors(theme).secondary};
  color: ${({ theme }) => AppColors(theme).text};
  border: none;
  border-radius: 50%;
`;
