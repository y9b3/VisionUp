import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles/theme";

const { height } = Dimensions.get("window"); // Récupérer la hauteur de l'écran

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "space-between", // Optimisé pour petits écrans
    paddingVertical: height < 700 ? 10 : theme.spacing.large,
  },
  logo: {
    width: height < 700 ? 130 : 150,
    height: height < 700 ? 130 : 150,
    marginBottom: theme.spacing.large,
  },
  uploadButton: {
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.borderRadius.medium,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: theme.spacing.medium,
    borderWidth: 2,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  uploadButtonText: {
    color: "#000",
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    marginLeft: theme.spacing.small,
  },
  uploadIcon: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: height < 700 ? 26 : 30,
    color: theme.colors.text,
    textAlign: "center",
    fontFamily: theme.fonts.extraBoldItalic,
    fontStyle: "italic",
    marginBottom: theme.spacing.large,
    lineHeight: 40,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: theme.spacing.medium,
  },
  input: {
    width: "80%",
    height: 45,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.medium,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.inputText,
    marginBottom: height < 700 ? theme.spacing.small : theme.spacing.medium,
  },
  passwordCriteriaContainer: {
    marginVertical: theme.spacing.medium,
    alignItems: "flex-start",
    width: "80%",
    padding: theme.spacing.small,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: theme.borderRadius.medium,
  },
  passwordCriteria: {
    flexDirection: "row",
    alignItems: "center",
    color: "#A9A9A9",
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: theme.spacing.small,
  },
  validCriteria: {
    color: "#3AB54A",
    fontWeight: "bold",
  },
  criteriaIcon: {
    fontSize: 18,
    marginRight: theme.spacing.small,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: theme.spacing.small,
    marginBottom: theme.spacing.medium,
  },
  nextButton: {
    backgroundColor: theme.colors.buttonPrimary,
    paddingVertical: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    width: "80%",
    alignItems: "center",
    marginBottom: theme.spacing.small,
  },
  registerButton: {
    backgroundColor: theme.colors.buttonPrimary,
    paddingVertical: theme.spacing.medium,
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
    backgroundColor: "#A9A9A9",
  },
  loginRedirect: {
    color: theme.colors.text,
    fontSize: 16,
    textAlign: "center",
    marginTop: theme.spacing.medium,
    fontWeight: "bold",
  },
});
