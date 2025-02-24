import React, { useState, useRef } from "react";
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Inscription.style";
import theme from "../../styles/theme";

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

  // Vérification des critères de mot de passe
  const passwordValidations = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*]/.test(password),
  };

  // Vérifier si tout est rempli et valide
  const isPasswordValid = Object.values(passwordValidations).every(Boolean);
  const isFormValid = email && password && confirmPassword;
  const isNextButtonEnabled = isFormValid && isPasswordValid;

  const handleNextStep = () => {
    if (!isFormValid) {
      setErrorMessage("❌ Remplissez tous les champs !");
      return;
    }

    if (!isPasswordValid) {
      setErrorMessage(
        "❌ Le mot de passe ne respecte pas les critères de sécurité !"
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("❌ Oups, le mot de passe ne correspond pas !");
      triggerShake();
      return;
    }

    setErrorMessage("");
    navigation.navigate("InscriptionStep2", { email, password });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View
            style={[
              styles.container,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            {/* 🔹 Logo en haut */}
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />

            {/* Titre */}
            <Text style={styles.subtitle}>INSCRIPTION - ÉTAPE 1</Text>

            {/* Message d'erreur */}
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

              {/* Indicateurs de sécurité du mot de passe */}
              <View style={styles.passwordCriteriaContainer}>
                <Text
                  style={[
                    styles.passwordCriteria,
                    passwordValidations.minLength && styles.validCriteria,
                  ]}
                >
                  {passwordValidations.minLength ? "✅" : "❌"} Au moins 8
                  caractères
                </Text>
                <Text
                  style={[
                    styles.passwordCriteria,
                    passwordValidations.uppercase && styles.validCriteria,
                  ]}
                >
                  {passwordValidations.uppercase ? "✅" : "❌"} Au moins une
                  majuscule
                </Text>
                <Text
                  style={[
                    styles.passwordCriteria,
                    passwordValidations.lowercase && styles.validCriteria,
                  ]}
                >
                  {passwordValidations.lowercase ? "✅" : "❌"} Au moins une
                  minuscule
                </Text>
                <Text
                  style={[
                    styles.passwordCriteria,
                    passwordValidations.number && styles.validCriteria,
                  ]}
                >
                  {passwordValidations.number ? "✅" : "❌"} Au moins un chiffre
                </Text>
                <Text
                  style={[
                    styles.passwordCriteria,
                    passwordValidations.specialChar && styles.validCriteria,
                  ]}
                >
                  {passwordValidations.specialChar ? "✅" : "❌"} Au moins un
                  caractère spécial (!@#$%^&*)
                </Text>
              </View>

              {/* Bouton Suivant (dynamique : grisé → vert) */}
              <TouchableOpacity
                style={[
                  styles.nextButton,
                  isNextButtonEnabled
                    ? styles.enabledButton
                    : styles.disabledButton,
                ]}
                onPress={handleNextStep}
                disabled={!isNextButtonEnabled}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isNextButtonEnabled
                      ? styles.enabledText
                      : styles.disabledText,
                  ]}
                >
                  SUIVANT
                </Text>
              </TouchableOpacity>

              {/* Bouton pour revenir à la connexion */}
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginRedirect}>
                  Déjà un compte ? Connecte-toi
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default InscriptionStep1;
