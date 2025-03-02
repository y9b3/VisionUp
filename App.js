import "react-native-gesture-handler";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import LoginScreen from "./components/loginScreen/LoginScreen";
import InscriptionStep1 from "./components/Inscription/InscriptionStep1";
import InscriptionStep2 from "./components/Inscription/InscriptionStep2";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"; // ✅ Ajout de LoadingScreen

import { useFonts } from "expo-font"; // Import des fonts
import {
  Kanit_400Regular,
  Kanit_700Bold,
  Kanit_800ExtraBold_Italic,
} from "@expo-google-fonts/kanit";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
    Kanit_800ExtraBold_Italic,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#1E3A8A" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animationTypeForReplace: "push" }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen} // ✅ Ajout de l'écran de chargement
          options={{
            cardStyleInterpolator:
              TransitionPresets.FadeFromBottomAndroid.cardStyleInterpolator, // ✅ Effet de fondu
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen} // ✅ HomeScreen après LoadingScreen
          options={{
            cardStyleInterpolator:
              TransitionPresets.FadeFromBottomAndroid.cardStyleInterpolator, // ✅ Animation fluide
          }}
        />
        <Stack.Screen
          name="InscriptionStep1"
          component={InscriptionStep1}
          options={{
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                transform: [
                  {
                    scale: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
              },
            }),
          }}
        />
        <Stack.Screen
          name="InscriptionStep2"
          component={InscriptionStep2}
          options={{
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [500, 0],
                    }),
                  },
                ],
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
