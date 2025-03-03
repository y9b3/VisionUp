import React, { useState } from "react";
import { API_URL } from "@env";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { styles } from "./LoginScreen.style";
import theme from "../../styles/theme";

const { height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Connexion réussie !", data);

        // ✅ Sauvegarde du pseudo de l'utilisateur dans AsyncStorage
        await AsyncStorage.setItem("pseudo", JSON.stringify(data.user.pseudo));

        alert("Connexion réussie !");
        navigation.navigate("Home"); // Rediriger vers HomeScreen
      } else {
        alert(data.message || "Erreur de connexion");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur de serveur");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require("../../assets/logo.png")} style={styles.logo} />

        {/* Slogan */}
        <Text style={styles.subtitle}>
          EXPOSEZ {"\n"} ECHANGEZ {"\n"} PROGRESSEZ
        </Text>

        {/* Formulaire */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Entrer votre e-mail"
              placeholderTextColor={theme.colors.placeholderTextColor}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mot de passe</Text>
            <TextInput
              style={styles.input}
              placeholder="Entrer votre mot de passe"
              placeholderTextColor={theme.colors.placeholderTextColor}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Mot de passe oublié */}
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
    </SafeAreaView>
  );
};

export default LoginScreen;
