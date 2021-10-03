import React, { ReactNode } from 'react';
import { useThemeContext } from '../../hooks/ThemeContext';
import { ButtonContainer } from './Styles';

interface IButtonProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onPress: () => void;
}

export default function Button({
  title,
  leftIcon,
  rightIcon,
  onPress,
}: IButtonProps): JSX.Element {
  const { theme } = useThemeContext();

  return (
    <ButtonContainer theme={theme}>
      <button onClick={onPress}>
        {leftIcon && leftIcon}
        <span>{title}</span>
        {rightIcon && rightIcon}
      </button>
    </ButtonContainer>
  );
}
