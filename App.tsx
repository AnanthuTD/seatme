import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Appbar, useTheme, MD2Theme, MD3Theme} from 'react-native-paper';
import SeatMeIcon from './SeatMeIcon';
import Home from './home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();

const HomePage = () => {
  const theme = useExampleTheme();

  const containerStyle = [
    styles.container,
    {
      backgroundColor: theme.colors.background,
    },
  ];

  return (
    <SafeAreaProvider>
    <SafeAreaView style={[containerStyle]}>
      <Appbar.Header>
        <SeatMeIcon width={25} margin={10} />
        <Appbar.Content title="SeatMe" />
      </Appbar.Header>
      <Home />
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomePage;
