import { View, Text, SafeAreaView } from "react-native";
import s from "./App.style";
import { Logo } from "./components/HomePage/Logo/Logo";
import { useFonts, Kanit_700Bold } from "@expo-google-fonts/kanit";

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Kanit: Kanit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={s.container}>
      <View style={s.workspace}>
        <Logo />
        <Text style={s.text}>Input Email</Text>
        <Text style={s.text}>Input MDP</Text>
        <Text style={s.text}>Restez connecté</Text>
        <Text style={s.text}>Mot de passe oublié</Text>
        <Text style={s.text}>Btn Connexion</Text>
        <Text style={s.text}>Inscription</Text>
      </View>
    </SafeAreaView>
  );
}
