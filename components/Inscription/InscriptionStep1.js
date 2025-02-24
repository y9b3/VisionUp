import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./Inscription.style";
import theme from "../../styles/theme";

const InscriptionStep1 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Vérification des critères de mot de passe
  const passwordValidations = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*]/.test(password),
  };

  const handleNextStep = () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Tous les champs doivent être remplis !");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas !");
      return;
    }
    if (!Object.values(passwordValidations).every(Boolean)) {
      setErrorMessage(
        "Le mot de passe ne respecte pas les critères de sécurité !"
      );
      return;
    }

    setErrorMessage("");
    navigation.navigate("InscriptionStep2", { email, password });
  };

  const isDisabled =
    !email ||
    !password ||
    !confirmPassword ||
    password !== confirmPassword ||
    !Object.values(passwordValidations).every(Boolean);

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
          <View style={styles.container}>
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

              {/* Bouton Suivant */}
              <TouchableOpacity
                style={[styles.nextButton, isDisabled && styles.disabledButton]}
                onPress={handleNextStep}
                disabled={isDisabled}
              >
                <Text style={styles.buttonText}>SUIVANT</Text>
              </TouchableOpacity>

              {/* Bouton pour revenir à la connexion */}
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginRedirect}>
                  Déjà un compte ? Connecte-toi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default InscriptionStep1;
