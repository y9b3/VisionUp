import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./components/loginScreen/LoginScreen";
import InscriptionStep1 from "./components/Inscription/InscriptionStep1";
import InscriptionStep2 from "./components/Inscription/InscriptionStep2";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Écran de connexion */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animationTypeForReplace: "push" }} // Effet de push pour le retour
        />

        {/* Étape 1 de l'inscription */}
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
                      outputRange: [0.5, 1], // Zoom progressif de 0.5x à 1x
                    }),
                  },
                ],
              },
            }),
          }}
        />

        {/* Étape 2 de l'inscription */}
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
                      outputRange: [500, 0], // Slide in depuis la droite
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
