import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import { StackParamList } from '../../navigation/AppNavigation';
import styles from './RoutineDetailsScreen.styles';

type RoutineDetailsScreenProps = {
  route: RouteProp<StackParamList, 'RoutineDetails'>;
  navigation: NativeStackNavigationProp<StackParamList, 'RoutineDetails'>;
};

const RoutineDetailsScreen: React.FC<RoutineDetailsScreenProps> = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title="Routine Details" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Routine Details</Text>
        <Text style={styles.detail}>Routine ID: {id}</Text>

        <Button title="Go Back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

export default RoutineDetailsScreen;
