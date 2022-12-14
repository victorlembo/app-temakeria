import { StyleSheet } from 'react-native';
import { theme } from "../../themes";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.red,
    height: 48,
    width: 160,
    borderRadius: 48,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16
  },
});