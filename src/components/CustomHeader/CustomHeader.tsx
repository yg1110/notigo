import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import { StackParamList } from '../../navigation/AppNavigation';
import styles from './CustomHeader.styles';

type CustomHeaderProps = {
  title: string;
  navigation: NativeStackNavigationProp<StackParamList>;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, navigation }) => {
  const hasPrevPage = navigation.canGoBack();
  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {hasPrevPage && (
        <TouchableOpacity onPress={goBack}>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <View />
    </View>
  );
};

export default CustomHeader;
