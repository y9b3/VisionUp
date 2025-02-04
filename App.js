import { View, Text, Image, TouchableOpacity } from "react-native";
import s from "./App.style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={s.container}>
      {/* Logo */}
      <Image
        source={require("./assets/Applog.png")}
        style={s.logo}
        resizeMode="contain"
      />

      {/* Titre */}
      <Text style={s.title}>Partage tes idées, bâtis ton avenir !</Text>

      {/* Sous-titre */}
      <Text style={s.subtitle}>
        Avec VisionUp, obtiens des retours de la communauté sur ton projet et
        bien plus encore... !
      </Text>

      {/* Boutons */}
      <View style={s.buttonContainer}>
        <TouchableOpacity
          style={s.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={s.loginText}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.signupButton}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={s.signupText}>Crée un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
