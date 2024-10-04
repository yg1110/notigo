import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import { StackParamList } from '../../navigation/AppNavigation';
import styles from './HomeScreen.styles';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('RoutineDetails', { id: 1 })} />
    </SafeAreaView>
  );
};

export default HomeScreen;
