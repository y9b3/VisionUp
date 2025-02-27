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

const startups = [
  { name: "Startup 1", sector: "Tech", description: "Une startup innovante en technologie.", video: require("../../assets/video_placeholder.png") },
  { name: "Startup 2", sector: "Finance", description: "Une startup révolutionnant la finance.", video: require("../../assets/video_placeholder.png") },
  { name: "Startup 3", sector: "Éducation", description: "Une startup pour l'éducation numérique.", video: require("../../assets/video_placeholder.png") },
];

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({ Kanit_700Bold });

  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);
  const bottomNavOpacity = useSharedValue(1);
  const feedbackButtonsOpacity = useSharedValue(0); // ✅ Restauré
  const questionsOpacity = useSharedValue(0);
  const containerHeight = useSharedValue(height * 0.68);
  const containerPosition = useSharedValue(0);
  const isSwipedUp = useSharedValue(false);

  const [currentStartupIndex, setCurrentStartupIndex] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

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
    opacity: feedbackButtonsOpacity.value, // ✅ Correctif appliqué ici
  }));

  const questionsStyle = useAnimatedStyle(() => ({
    opacity: questionsOpacity.value,
  }));

  const goToNextStartup = () => {
    if (!isSwipedUp.value && currentStartupIndex < startups.length - 1) {
      setCurrentStartupIndex(currentStartupIndex + 1);
      translateX.value = withTiming(0);
      opacity.value = withTiming(1, { duration: 200 });
    }
  };
  const isSwipingHorizontally = useSharedValue(false);
  const isSwipingVertically = useSharedValue(false);

  const swipeGesture = Gesture.Pan()
  .onUpdate((event) => {
    if (!isSwipingHorizontally.value && !isSwipingVertically.value) {
      // Détection du type de swipe au début du mouvement
      if (Math.abs(event.translationX) > Math.abs(event.translationY)) {
        isSwipingHorizontally.value = true; // On verrouille en mode horizontal
      } else {
        isSwipingVertically.value = true; // On verrouille en mode vertical
      }
    }

    if (isSwipingHorizontally.value) {
      translateX.value = event.translationX * 0.3;
    }

    if (isSwipingVertically.value) {
      translateY.value = event.translationY * 0.3;
    }
  })
  .onEnd((event) => {
    if (isSwipingHorizontally.value) {
      // Gestion du swipe horizontal
      if (Math.abs(event.translationX) > 50 && !isSwipedUp.value) {
        runOnJS(goToNextStartup)();
      }
      translateX.value = withSpring(0, { damping: 8, stiffness: 150 });
    }

    if (isSwipingVertically.value) {
      if (event.translationY < -50 && !isSwipedUp.value) {
        containerHeight.value = withSpring(height * 0.35, { damping: 10, stiffness: 120 });
        containerPosition.value = withSpring(-height * 0.26, { damping: 10, stiffness: 120 });
        translateY.value = withSpring(0);
        translateX.value = withSpring(0);
        bottomNavOpacity.value = withTiming(0, { duration: 300 });
        feedbackButtonsOpacity.value = withTiming(1, { duration: 300 });
        questionsOpacity.value = withTiming(1, { duration: 300 });
        isSwipedUp.value = true;
      } 
      else if (event.translationY > 50 && isSwipedUp.value) {
        containerHeight.value = withSpring(height * 0.68, { damping: 10, stiffness: 120 });
        containerPosition.value = withSpring(0, { damping: 10, stiffness: 120 });
        translateY.value = withSpring(10, { damping: 8, stiffness: 200 }); // Ajout du rebond léger
        translateY.value = withSpring(0, { damping: 8, stiffness: 150 }); // Retour à la position normale
        translateX.value = withSpring(0);
        bottomNavOpacity.value = withTiming(1, { duration: 300 });
        feedbackButtonsOpacity.value = withTiming(0, { duration: 300 });
        questionsOpacity.value = withTiming(0, { duration: 300 });
        isSwipedUp.value = false;
      } else {
        translateY.value = withSpring(0, { damping: 8, stiffness: 150 });
      }
    }

    // ✅ Reset du verrou de direction après chaque swipe
    isSwipingHorizontally.value = false;
    isSwipingVertically.value = false;
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>FRIEND'S FEED</Text>
        <TouchableOpacity>
          <FontAwesome5 name="users" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>

      <GestureDetector gesture={swipeGesture}>
        <Animated.View style={[styles.videoContainer, animatedStyle]}>
          <Image source={startups[currentStartupIndex].video} style={styles.videoPlaceholder} />
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{startups[currentStartupIndex].name}</Text>
            <Text style={styles.descriptionText}>{startups[currentStartupIndex].sector}</Text>
            <Text style={styles.descriptionText}>{startups[currentStartupIndex].description}</Text>
          </View>
        </Animated.View>
      </GestureDetector>

      {/* QUESTIONS */}
      <Animated.View style={[styles.questionContainer, questionsStyle]}>
        <Text style={styles.questionText}>Question 1</Text>
        <View style={styles.optionsContainer}>
          {["Choix 1", "Choix 2", "Choix 3"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, selectedOption1 === option && styles.optionButtonSelected]}
              onPress={() => setSelectedOption1(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      <Animated.View style={[styles.questionContainer, styles.secondQuestion, questionsStyle]}>
        <Text style={styles.questionText}>Question 2</Text>
        <View style={styles.optionsContainer}>
          {["Choix 1", "Choix 2", "Choix 3"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, selectedOption2 === option && styles.optionButtonSelected]}
              onPress={() => setSelectedOption2(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      <Animated.View style={[styles.questionContainer, styles.thirdQuestion, questionsStyle]}>
        <Text style={styles.questionText}>Question 3</Text>
        <View style={styles.optionsContainer}>
          {["Choix 1", "Choix 2", "Choix 3"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, selectedOption3 === option && styles.optionButtonSelected]}
              onPress={() => setSelectedOption3(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      <Animated.View style={[styles.bottomNav, bottomNavStyle]}>
        <TouchableOpacity style={styles.navItem}><FontAwesome5 name="users" size={24} color="#FFF" /></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Ionicons name="chatbubble-outline" size={24} color="#FFF" /></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Ionicons name="person-outline" size={24} color="#FFF" /></TouchableOpacity>
      </Animated.View>

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