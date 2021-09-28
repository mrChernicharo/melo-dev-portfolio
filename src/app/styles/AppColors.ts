import { IAppTheme } from '../hooks/ThemeContext';

export const AppColors = (theme: IAppTheme): Record<string, string> => {
  const colors = {
    bg: theme === 'light' ? '#eee' : '#282c34',
    bgg: theme === 'light' ? '#41424d' : '#41424d',
    bggg: theme === 'light' ? '#abcdef' : '#41424d',
    text: theme === 'light' ? '#41424d' : '#fff',
  };

  return colors;
};
