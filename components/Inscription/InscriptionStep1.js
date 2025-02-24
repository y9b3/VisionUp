import React, { useState, useRef } from "react";
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./Inscription.style";

const InscriptionStep1 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Animation de glitch
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleNextStep = () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Tous les champs doivent être remplis !");
      triggerShake();
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas !");
      triggerShake();
      return;
    }

    setErrorMessage("");
    navigation.navigate("InscriptionStep2", { email, password });
  };

  const isDisabled = !email || !password || !confirmPassword;

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: shakeAnimation }] },
      ]}
    >
      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <Text style={styles.subtitle}>INSCRIPTION - ÉTAPE 1</Text>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrer votre e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Entrer votre mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmer votre mot de passe"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Bouton Suivant */}
        <TouchableOpacity
          style={[styles.nextButton, isDisabled && styles.disabledButton]}
          onPress={handleNextStep}
          disabled={isDisabled}
        >
          <Text style={styles.buttonText}>SUIVANT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginRedirect}>
            Déjà un compte ? Connecte-toi
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default InscriptionStep1;
