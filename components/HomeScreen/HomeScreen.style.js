import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./HomeScreen.style";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const HomeScreen = () => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationY < -50) {
      translateY.value = withSpring(-50); // Swipe vers le haut
    } else if (event.nativeEvent.translationY > 50) {
      translateY.value = withSpring(0); // Swipe vers le bas (retour position initiale)
    }
  };

  return (
    <View style={styles.container}>
      {/* SWIPE HANDLER */}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.videoContainer, animatedStyle]}>
          <Image source={require("../../assets/video_placeholder.png")} style={styles.videoPlaceholder} />
          
          {/* DESCRIPTION EN PREMIER PLAN */}
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>Bienvenue sur VisionUp</Text>
            <Text style={styles.descriptionText}>Découvrez les startups et échangez avec elles</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default HomeScreen;
