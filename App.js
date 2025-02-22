import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./components/loginScreen/LoginScreen";
import InscriptionScreen from "./components/Inscription/Inscription";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animationTypeForReplace: "push" }} // Effet de push pour le retour
        />
        <Stack.Screen
          name="Inscription"
          component={InscriptionScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
