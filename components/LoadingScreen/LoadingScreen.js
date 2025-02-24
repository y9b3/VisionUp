import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useFonts, Kanit_700Bold } from "@expo-google-fonts/kanit";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./LoadingScreen.style";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const LoadingScreen = () => {
  let [fontsLoaded] = useFonts({ Kanit_700Bold });
  const navigation = useNavigation();

  // 🌀 Animation pour le logo et le texte
  const opacity = useSharedValue(0); // Départ invisible
  const scale = useSharedValue(0.8); // Départ légèrement plus petit

  useEffect(() => {
    // Animation de fondu + zoom progressif
    opacity.value = withTiming(1, { duration: 1200 });
    scale.value = withTiming(1, { duration: 1200 });

    // Redirection vers Home après 2.45s
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 2450);

    return () => clearTimeout(timer);
  }, [navigation]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Logo animé */}
      <Animated.Image source={require("../../assets/logo.png")} style={[styles.logo, animatedStyle]} />

      {/* Texte animé */}
      <Animated.Text style={[styles.welcomeText, animatedStyle]}>
        Bienvenue !
      </Animated.Text>
    </View>
  );
};

export default LoadingScreen;