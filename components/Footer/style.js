import { StyleSheet } from "react-native";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.brown,
    fontSize: 17,
  },
  description: {
    fontFamily: theme.fonts.secondary400,
    color: theme.colors.gray,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
    marginTop: 8,
  },
  footerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.brown,
    fontSize: 34,
  },
});
