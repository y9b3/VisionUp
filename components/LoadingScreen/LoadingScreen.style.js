import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles/theme";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: height < 700 ? 180 : 220, // ✅ Ajustement de la taille du logo
    height: height < 700 ? 180 : 220,
    marginBottom: theme.spacing.large,
  },
  welcomeText: {
    fontSize: height < 700 ? 28 : 34, // ✅ Agrandissement du texte "Bienvenue !"
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
    textAlign: "center",
    marginTop: theme.spacing.small,
  },
});