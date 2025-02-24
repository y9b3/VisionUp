import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window"); // Récupérer la hauteur de l'écran

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3A8A",
    alignItems: "center",
    justifyContent: "space-between", // Espacement automatique pour éviter le scroll
    paddingVertical: height < 700 ? 10 : 20, // Ajustement selon l'écran
  },
  logo: {
    width: height < 700 ? 140 : 190, // Réduction du logo sur les petits écrans
    height: height < 700 ? 140 : 190,
    marginBottom: height < 700 ? -10 : -20, // Ajustement dynamique
  },
  subtitle: {
    fontSize: height < 700 ? 30 : 38, // Taille réduite sur petits écrans
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Kanit_800ExtraBold_Italic",
    fontStyle: "italic",
    marginBottom: height < 700 ? 25 : 45,
    lineHeight: height < 700 ? 35 : 40,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    width: "70%",
    marginBottom: height < 700 ? 5 : 10, // Réduction de l'espace entre les inputs
  },
  label: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Kanit_700Bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40, // Hauteur ajustée pour gagner de l'espace
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    fontFamily: "Kanit_700Bold",
    color: "#000",
    marginBottom: height < 700 ? 8 : 10, // Moins d'espace sur les petits écrans
  },
  forgotPasswordContainer: {
    width: "70%",
    alignItems: "flex-start",
    marginBottom: height < 700 ? 10 : 15, // Ajustement de l'espace avant le bouton connexion
  },
  forgotPassword: {
    color: "#FF0000",
    fontSize: 12,
    fontFamily: "Kanit_700Bold",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#3AB54A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
    marginBottom: height < 700 ? 5 : 10, // Moins d'espace si l'écran est petit
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Kanit_700Bold",
  },
  registerButton: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#1E3A8A",
    marginBottom: height < 700 ? 5 : 10, // Ajustement pour éviter de scroller
  },
  registerButtonText: {
    color: "#3366CC",
    fontSize: 16,
    fontFamily: "Kanit_700Bold",
  },
});
