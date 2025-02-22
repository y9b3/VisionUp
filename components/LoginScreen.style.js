import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3A8A",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 190,
    height: 190,
    marginBottom: -20, // Ajusté pour mieux espacer le slogan
  },
  subtitle: {
    fontSize: 38,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Kanit_800ExtraBold_Italic",
    fontStyle: "italic",
    marginBottom: 45, // Remonté légèrement
    lineHeight: 40,
  },
  formContainer: {
    marginTop: 40, // Descend tout le champ de connexion
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    width: "70%",
  },
  label: {
    color: "#FFF",
    fontSize: 14, // Taille réduite
    fontFamily: "Kanit_700Bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    fontFamily: "Kanit_700Bold",
    color: "#000",
    marginBottom: 10, // Réduction de l’espace entre les champs
  },
  forgotPasswordContainer: {
    width: "70%",
    alignItems: "flex-start", // Alignement à gauche
    marginBottom: 15, // Espacement avant le bouton connexion
  },
  forgotPassword: {
    color: "#FF0000",
    fontSize: 12, // Taille réduite
    fontFamily: "Kanit_700Bold",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#3AB54A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "70%", // Bouton réduit
    alignItems: "center",
    marginBottom: 1,
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
    width: "70%", // Bouton réduit
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#1E3A8A",
  },
  registerButtonText: {
    color: "#3366CC",
    fontSize: 16,
    fontFamily: "Kanit_700Bold",
  },
});
