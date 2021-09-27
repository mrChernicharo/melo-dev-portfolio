import styled from 'styled-components';
import { IAppTheme } from '../../hooks/ThemeContext';
import { AppColors } from '../../styles/appColors';

export const Styles = styled.header<{ theme: IAppTheme }>`
  background: ${({ theme }) => AppColors(theme).bgg};
  width: 100%;

  position: fixed;
  top: 0;

  display: grid;
  grid-template-columns: 54px 170px 1fr;
  align-items: center;

  color: #fff;

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
