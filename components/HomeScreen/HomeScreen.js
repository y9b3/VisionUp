import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useFonts, Kanit_700Bold } from "@expo-google-fonts/kanit";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

// 🔥 LISTE DES STARTUPS
const startups = [
  {
    name: "Startup 1",
    sector: "Tech",
    description: "Une startup innovante en technologie.",
    video: require("../../assets/video_placeholder.png"),
  },
  {
    name: "Startup 2",
    sector: "Finance",
    description: "Une startup révolutionnant la finance.",
    video: require("../../assets/video_placeholder.png"),
  },
  {
    name: "Startup 3",
    sector: "Éducation",
    description: "Une startup pour l'éducation numérique.",
    video: require("../../assets/video_placeholder.png"),
  },
];

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({ Kanit_700Bold });

  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);
  const containerHeight = useSharedValue(height * 0.68);
  const containerPosition = useSharedValue(0);

  const [currentStartupIndex, setCurrentStartupIndex] = useState(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value + containerPosition.value },
      { translateX: translateX.value },
    ],
    height: containerHeight.value,
    opacity: opacity.value,
  }));

  const goToNextStartup = () => {
    if (currentStartupIndex < startups.length - 1) {
      setCurrentStartupIndex(currentStartupIndex + 1);
    }
    translateX.value = withTiming(0);
    opacity.value = withTiming(1, { duration: 200 });
  };

  // 📌 GESTURE HANDLER POUR LE SWIPE
  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (Math.abs(event.translationX) > Math.abs(event.translationY)) {
        translateX.value = event.translationX * 0.4;
      } else {
        translateY.value = event.translationY * 0.4;
      }
    })
    .onEnd((event) => {
      if (event.translationY < -50) {
        containerHeight.value = withSpring(height * 0.35);
        containerPosition.value = withSpring(-height * 0.26);
        translateY.value = withSpring(0);
      } else if (event.translationY > 50) {
        containerHeight.value = withSpring(height * 0.68);
        containerPosition.value = withSpring(0);
        translateY.value = withSpring(0);
      }

      if (event.translationX < -100 || event.translationX > 100) {
        // SWIPE GAUCHE (J'aime) ou DROITE (Je n'aime pas) → Passe au projet suivant avec animation
        opacity.value = withTiming(0, { duration: 200 }, () => {
          runOnJS(goToNextStartup)();
          opacity.value = withTiming(1, { duration: 200 });
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>FRIEND'S FEED</Text>
        <TouchableOpacity>
          <FontAwesome5 name="users" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* SWIPE CONTAINER */}
      <GestureDetector gesture={swipeGesture}>
        <Animated.View style={[styles.videoContainer, animatedStyle]}>
          <Image source={startups[currentStartupIndex].video} style={styles.videoPlaceholder} />

          {/* Description */}
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{startups[currentStartupIndex].name}</Text>
            <Text style={styles.descriptionText}>{startups[currentStartupIndex].sector}</Text>
            <Text style={styles.descriptionText}>{startups[currentStartupIndex].description}</Text>
          </View>
        </Animated.View>
      </GestureDetector>

      {/* Barre de navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="users" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1E3A8A", alignItems: "center", justifyContent: "space-between" },
  header: { 
    width: "100%", 
    height: height * 0.12, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingHorizontal: 20, 
    paddingTop: 75,
  },
  logo: { width: 70, height: 70 },
  title: { fontSize: 22, color: "#FFF", fontFamily: "Kanit_700Bold" },
  videoContainer: { width: "95%", backgroundColor: "#0A1B3D", borderRadius: 25, overflow: "hidden", justifyContent: "center", alignItems: "center" },
  bottomNav: { width: "90%", height: 65, backgroundColor: "#162D6A", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: 30, marginBottom: height * 0.03 },
  descriptionBox: { position: "absolute", bottom: 10, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)", paddingVertical: 12, paddingHorizontal: 15, alignItems: "center", zIndex: 10 },
  descriptionText: { color: "#FFF", fontSize: 14, fontFamily: "Kanit_700Bold", textAlign: "center" },
});

export default HomeScreen;