import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles/theme";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: height < 700 ? theme.spacing.small : theme.spacing.large, // Ajustement selon l'écran
  },
  logo: {
    width: height < 700 ? 100 : 120, // Taille ajustée sur petits écrans
    height: height < 700 ? 100 : 120,
    marginBottom: height < 700 ? 10 : theme.spacing.large,
  },
  subtitle: {
    fontSize: height < 700 ? 24 : 32,
    color: theme.colors.text,
    textAlign: "center",
    fontFamily: theme.fonts.extraBoldItalic,
    fontStyle: "italic",
    marginBottom: height < 700 ? 10 : 20, // Moins d’espace sous le titre
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: height < 700 ? 5 : 15, // Moins d’espace avant les inputs
  },
  input: {
    width: "85%",
    height: 50,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.medium,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.inputText,
    marginBottom: height < 700 ? 8 : theme.spacing.medium, // Moins d’espace entre les inputs
  },
  passwordCriteriaContainer: {
    marginTop: height < 700 ? 8 : theme.spacing.medium,
    marginBottom: height < 700 ? 8 : theme.spacing.medium, // Ajustement du bas
    padding: theme.spacing.small,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: theme.borderRadius.medium,
    width: "85%",
  },
  nextButton: {
    paddingVertical: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    width: "85%", // Correspond mieux à la largeur des inputs
    alignItems: "center",
    marginTop: height < 700 ? 10 : theme.spacing.small,
  },
  enabledButton: {
    backgroundColor: theme.colors.buttonPrimary, // ✅ Vert si actif
  },
  disabledButton: {
    backgroundColor: "#A9A9A9", // ✅ Gris si inactif
  },
  buttonText: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
  },
  enabledText: {
    color: "#FFF", // ✅ Texte blanc si actif
  },
  disabledText: {
    color: "#D3D3D3", // ✅ Texte plus clair si inactif
  },
  loginRedirect: {
    color: theme.colors.text,
    fontSize: 16,
    textAlign: "center",
    marginTop: height < 700 ? 10 : theme.spacing.medium,
    fontWeight: "bold",
  },
});
