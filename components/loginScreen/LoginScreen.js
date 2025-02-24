import React, { useState } from "react";
import { styles } from "./LoginScreen.style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import {
  useFonts,
  Kanit_700Bold,
  Kanit_800ExtraBold_Italic,
} from "@expo-google-fonts/kanit";

const LoginScreen = ({ navigation }) => {
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
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      {/* Slogan */}
      <Text style={styles.subtitle}>
        EXPOSEZ {"\n"} ECHANGEZ {"\n"} PROGRESSEZ
      </Text>

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
        <TouchableOpacity
          onPress={() => navigation.navigate("InscriptionStep1")}
          style={styles.registerButton}
        >
          <Text style={styles.registerButtonText}>INSCRIPTION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
