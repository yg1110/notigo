import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
}

export default App;
