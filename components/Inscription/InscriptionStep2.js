import React, { useState, useRef } from "react";
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./InscriptionStep2.style";

const InscriptionStep2 = ({ route, navigation }) => {
  const { email, password } = route.params;

  const [pseudo, setPseudo] = useState("");
  const [secteur, setSecteur] = useState("");
  const [siteWeb, setSiteWeb] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [profileImage, setProfileImage] = useState(null);
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    if (!pseudo) {
      setErrorMessage("Le pseudo est obligatoire !");
      triggerShake();
      return;
    }

    console.log("Inscription réussie !");
    console.log({
      email,
      password,
      pseudo,
      secteur,
      siteWeb,
      entreprise,
      profileImage,
    });
  };

  const isDisabled = !pseudo;

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: shakeAnimation }] },
      ]}
    >
      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <Text style={styles.subtitle}>INSCRIPTION - ÉTAPE 2</Text>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Choisissez un pseudo"
          value={pseudo}
          onChangeText={setPseudo}
        />
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadIcon}>📷</Text>
          <Text style={styles.uploadButtonText}>Choisir une photo</Text>
        </TouchableOpacity>
        {profileImage && (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        )}
        <TextInput
          style={styles.input}
          placeholder="Secteur d'activité"
          value={secteur}
          onChangeText={setSecteur}
        />
        <TextInput
          style={styles.input}
          placeholder="Lien du site web (facultatif)"
          value={siteWeb}
          onChangeText={setSiteWeb}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom de l'entreprise (facultatif)"
          value={entreprise}
          onChangeText={setEntreprise}
        />

        {/* Bouton Inscription */}
        <TouchableOpacity
          style={[styles.registerButton, isDisabled && styles.disabledButton]}
          onPress={handleRegister}
          disabled={isDisabled}
        >
          <Text style={styles.buttonText}>VALIDER L'INSCRIPTION</Text>
        </TouchableOpacity>

        {/* 🔹 Bouton texte pour rediriger vers la connexion */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginRedirect}>
            Déjà un compte ? Connecte-toi
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default InscriptionStep2;
