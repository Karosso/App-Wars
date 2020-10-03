import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import { useFonts, PollerOne_400Regular } from '@expo-google-fonts/poller-one';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    PollerOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <> 
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }

  
}
