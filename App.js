import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { useFonts, Kanit_700Bold } from "@expo-google-fonts/kanit";
import LoginScreen from "./components/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({ Kanit_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
