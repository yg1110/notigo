import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  safeArea: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
  detail: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default styles;
