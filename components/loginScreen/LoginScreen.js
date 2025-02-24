import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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

  const handleLogin = () => {
    if (!email || !password) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    console.log("Email:", email);
    console.log("Mot de passe:", password);

    // ✅ Navigation vers LoadingScreen AVANT HomeScreen
    navigation.navigate("Loading");
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