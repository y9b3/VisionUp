import React, { useState } from "react";
import { styles } from "./Inscription.style";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import {
  useFonts,
  Kanit_700Bold,
  Kanit_800ExtraBold_Italic,
} from "@expo-google-fonts/kanit";

const InscriptionScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({ Kanit_700Bold, Kanit_800ExtraBold_Italic });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Tous les champs doivent être remplis !");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas !");
      return;
    }

    // Réinitialiser le message d'erreur si tout est bon
    setErrorMessage("");
    console.log("Inscription réussie !");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      {/* Slogan */}
      <Text style={styles.subtitle}>REJOIGNEZ-NOUS MAINTENANT !</Text>

      {/* Message d'erreur */}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      {/* Bloc des champs */}
      <View style={styles.formContainer}>
        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrer votre e-mail"
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
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Confirmer Mot de passe */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmer le mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmer votre mot de passe"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Bouton Inscription */}
        <TouchableOpacity
          style={[
            styles.registerButton,
            (!email || !password || !confirmPassword) && styles.disabledButton, // Désactive si vide
          ]}
          onPress={handleRegister}
          disabled={!email || !password || !confirmPassword} // Empêche le clic si vide
        >
          <Text style={styles.registerButtonText}>S'INSCRIRE</Text>
        </TouchableOpacity>

        {/* Retour à la connexion */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginRedirect}>
            Déjà un compte ? Connectez-vous
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InscriptionScreen;
