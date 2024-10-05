import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import SplashScreen from 'react-native-splash-screen';

import { StackParamList } from '../../navigation/AppNavigation';
import styles from './IntroScreen.styles';

type IntroScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Intro'>;
};
const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Screen!</Text>
    </SafeAreaView>
  );
};

export default IntroScreen;
