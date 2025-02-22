import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background, // Utilisation du thème
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.large,
  },
  logo: {
    width: 190,
    height: 190,
    marginBottom: -20,
  },
  subtitle: {
    fontSize: 38,
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
  inputContainer: {
    width: "70%",
  },
  label: {
    color: theme.colors.text,
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    marginBottom: theme.spacing.small,
  },
  input: {
    width: "100%",
    height: 45,
    placeholderTextColor: theme.colors.placeholderTextColor,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.medium,
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    color: theme.colors.inputText,
    marginBottom: theme.spacing.small,
  },
  forgotPasswordContainer: {
    width: "70%",
    alignItems: "flex-start",
    marginBottom: theme.spacing.medium,
  },
  forgotPassword: {
    color: theme.colors.error,
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: theme.colors.buttonPrimary,
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    width: "70%",
    alignItems: "center",
    marginBottom: theme.spacing.small,
  },
  loginButtonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  registerButton: {
    backgroundColor: theme.colors.buttonSecondary,
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    width: "70%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.buttonBorder,
  },
  registerButtonText: {
    color: theme.colors.secondary,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  loginRedirect: {
    color: theme.colors.text,
    fontSize: 18,
    textAlign: "center",
    marginTop: theme.spacing.large,
    fontWeight: "bold",
  },
  errorText: {
    color: "#FF0000", // Rouge pour l'erreur
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9", // Gris foncé pour le bouton désactivé
  },
});
