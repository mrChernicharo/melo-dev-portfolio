import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../styles/appColors';

export const VideoStyles = styled.div<{ theme: IAppTheme }>`
  /* border: 1px solid red; */
  background: ${({ theme }) => AppColors(theme).bggg};
  width: 100%;
  margin: 1rem;
  padding-top: 1rem;
  padding-bottom: 0.8rem;

  video {
    height: 100%;
    width: 100%;
    max-height: 480px;
  }
`;