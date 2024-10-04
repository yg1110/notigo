import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  backButton: TextStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: 56,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    gap: 12,
  },
  backButton: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
