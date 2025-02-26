import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
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
import { styles } from "./HomeScreen.style";

const { height } = Dimensions.get("window");

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
  const bottomNavOpacity = useSharedValue(1);
  const feedbackButtonsOpacity = useSharedValue(0);
  const questionsOpacity = useSharedValue(0); // Ajouté pour l'affichage des questions
  const containerHeight = useSharedValue(height * 0.68);
  const containerPosition = useSharedValue(0);

  const [currentStartupIndex, setCurrentStartupIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value + containerPosition.value },
      { translateX: translateX.value },
    ],
    height: containerHeight.value,
    opacity: opacity.value,
  }));

  const bottomNavStyle = useAnimatedStyle(() => ({
    opacity: bottomNavOpacity.value,
  }));

  const feedbackButtonsStyle = useAnimatedStyle(() => ({
    opacity: feedbackButtonsOpacity.value,
  }));

  const questionsStyle = useAnimatedStyle(() => ({
    opacity: questionsOpacity.value,
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
        bottomNavOpacity.value = withTiming(0, { duration: 300 });
        feedbackButtonsOpacity.value = withTiming(1, { duration: 300 });
        questionsOpacity.value = withTiming(1, { duration: 300 }); // Afficher les questions
      } else if (event.translationY > 50) {
        containerHeight.value = withSpring(height * 0.68);
        containerPosition.value = withSpring(0);
        translateY.value = withSpring(0);
        bottomNavOpacity.value = withTiming(1, { duration: 300 });
        feedbackButtonsOpacity.value = withTiming(0, { duration: 300 });
        questionsOpacity.value = withTiming(0, { duration: 300 }); // Cacher les questions
      }

      if (event.translationX < -100 || event.translationX > 100) {
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

      {/* QUESTIONS ET RÉPONSES */}
      <Animated.View style={[styles.questionContainer, questionsStyle]}>
        <Text style={styles.questionText}>Que pensez-vous du projet ?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === "Excellent" && styles.optionButtonSelected,
            ]}
            onPress={() => setSelectedOption("Excellent")}
          >
            <Text style={styles.optionText}>Excellent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === "Moyen" && styles.optionButtonSelected,
            ]}
            onPress={() => setSelectedOption("Moyen")}
          >
            <Text style={styles.optionText}>Moyen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === "À améliorer" && styles.optionButtonSelected,
            ]}
            onPress={() => setSelectedOption("À améliorer")}
          >
            <Text style={styles.optionText}>À améliorer</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Barre de navigation */}
      <Animated.View style={[styles.bottomNav, bottomNavStyle]}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="users" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </Animated.View>

      {/* Boutons de Feedback */}
      <Animated.View style={[styles.feedbackButtonsContainer, feedbackButtonsStyle]}>
        <TouchableOpacity style={[styles.feedbackButton, styles.feedbackGreen]}>
          <Text style={styles.feedbackButtonText}>RÉDIGEZ UN FEEDBACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.feedbackButton, styles.feedbackBlue]}>
          <Text style={styles.feedbackButtonText}>ENVOYEZ</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;