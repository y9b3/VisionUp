import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useFonts, Kanit_700Bold, Kanit_800ExtraBold_Italic } from "@expo-google-fonts/kanit";

const LoginScreen = () => {
  let [fontsLoaded] = useFonts({ Kanit_700Bold, Kanit_800ExtraBold_Italic });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      {/* Slogan */}
      <Text style={styles.subtitle}>EXPOSEZ {"\n"} ECHANGEZ {"\n"} PROGRESSEZ</Text>

      {/* Bloc des champs descendu */}
      <View style={styles.formContainer}>
        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrer votre e-mail"
            placeholderTextColor="#B0C4DE"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Mot de passe */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrer votre mot de passe"
            placeholderTextColor="#B0C4DE"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Mot de passe oublié aligné à gauche */}
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        {/* Bouton Connexion */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>CONNEXION</Text>
        </TouchableOpacity>

        {/* Bouton Inscription */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>INSCRIPTION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default LoginScreen;