import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../themes/darkTheme';

type Props = {
  children: React.ReactNode;
};

export function Theme({ children }: Props) {
  useEffect(() => {
    changeNavigationBarColor(darkTheme.colors.background.primary, true, true);
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <StatusBar backgroundColor={darkTheme.colors.background.primary} />
      {children}
    </ThemeProvider>
  );
}
