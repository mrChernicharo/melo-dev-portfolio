import React, { ReactNode } from 'react';
import { useThemeContext } from '../../hooks/ThemeContext';
import { ButtonContainer } from './Styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: IButtonProps): JSX.Element {
  const { theme } = useThemeContext();
  return (
    <ButtonContainer theme={theme} onClick={onPress}>
      <span>{title}</span>
    </ButtonContainer>
  );
}
