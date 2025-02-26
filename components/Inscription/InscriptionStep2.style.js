import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles/theme";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: height < 700 ? theme.spacing.small : theme.spacing.large,
    paddingTop: height < 700 ? theme.spacing.large : theme.spacing.large + 10, // 🔹 Descend légèrement tout le contenu
  },
  logo: {
    width: height < 700 ? 100 : 120,
    height: height < 700 ? 100 : 120,
    marginBottom: height < 700 ? theme.spacing.medium : theme.spacing.large + 5, // 🔹 Ajustement sous le logo
  },
  subtitle: {
    fontSize: height < 700 ? 24 : 32,
    color: theme.colors.text,
    textAlign: "center",
    fontFamily: theme.fonts.extraBoldItalic,
    fontStyle: "italic",
    marginBottom: height < 700 ? theme.spacing.medium : theme.spacing.large, // 🔹 Espacement plus logique
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: height < 700 ? theme.spacing.medium : theme.spacing.large, // 🔹 Ajusté pour éviter que tout colle
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
    marginBottom: theme.spacing.medium, // 🔹 Plus d’espace entre les inputs
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: 50,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.medium,
    borderWidth: 2,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: theme.spacing.medium,
  },
  uploadIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  uploadButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  registerButton: {
    backgroundColor: theme.colors.buttonPrimary,
    paddingVertical: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    width: "85%",
    alignItems: "center",
    marginBottom: height < 700 ? theme.spacing.medium : theme.spacing.large,
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    color: "#FFF",
  },
  loginRedirect: {
    color: theme.colors.text,
    fontSize: 16,
    textAlign: "center",
    marginTop: height < 700 ? theme.spacing.medium : theme.spacing.large,
    fontWeight: "bold",
  },
});
