import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.large,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: theme.spacing.large, // Ajout d'un espace sous le logo
  },
  subtitle: {
    fontSize: 30,
    color: theme.colors.text,
    textAlign: "center",
    fontFamily: theme.fonts.extraBoldItalic,
    fontStyle: "italic",
    marginBottom: theme.spacing.large,
    lineHeight: 40,
  },
  formContainer: {
    marginTop: theme.spacing.large,
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50, // Augmenté pour un meilleur confort
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.medium,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.inputText,
    marginBottom: theme.spacing.medium, // Plus d'espace entre les inputs
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 14,
    textAlign: "center",
    marginBottom: theme.spacing.small,
    fontWeight: "bold",
  },
  uploadButton: {
    backgroundColor: theme.colors.buttonSecondary,
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    width: "80%",
    alignItems: "center",
    marginBottom: theme.spacing.medium,
  },
  uploadButtonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: theme.spacing.small,
    marginBottom: theme.spacing.medium,
  },
  nextButton: {
    backgroundColor: theme.colors.buttonPrimary, // Vert si actif
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    width: "80%",
    alignItems: "center",
    marginBottom: theme.spacing.small,
  },
  registerButton: {
    backgroundColor: theme.colors.buttonPrimary,
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    width: "80%",
    alignItems: "center",
    marginBottom: theme.spacing.medium,
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 18,
    fontFamily: theme.fonts.bold,
  },
  disabledButton: {
    backgroundColor: "#A9A9A9", // Gris pour l'état désactivé
  },
  loginRedirect: {
    color: theme.colors.text, // Texte blanc ou autre couleur
    fontSize: 16,
    textAlign: "center",
    marginTop: theme.spacing.medium,
    fontWeight: "bold",
  },
});
