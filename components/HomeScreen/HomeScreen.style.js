import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles/theme";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    height: height * 0.12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 75,
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 22,
    color: "#FFF",
    fontFamily: "Kanit_700Bold",
  },
  videoContainer: {
    width: "95%",
    backgroundColor: "#0A1B3D",
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNav: {
    width: "90%",
    height: 65,
    backgroundColor: "#162D6A",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: height * 0.03,
  },
  descriptionBox: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: "center",
    zIndex: 10,
  },
  descriptionText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Kanit_700Bold",
    textAlign: "center",
  },

  // ✅ NOUVEAUX STYLES POUR LES BOUTONS FEEDBACK ✅
  feedbackButtonsContainer: {
    position: "absolute",
    bottom: height * 0.04, // Même position que la barre de navigation
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0, // Commence invisible, géré par Animated
  },
  feedbackButton: {
    width: "38%", // Réduction de la largeur
    paddingVertical: 14, // Bouton plus fin
    borderRadius: 23, // Coins moins arrondis
    alignItems: "center",
  },
  feedbackGreen: {
    backgroundColor: "#3AB54A", // 🟩 Vert pour rédiger un feedback
  },
  feedbackBlue: {
    backgroundColor: "#0074FF", // 🔵 Bleu pour envoyer
  },
  feedbackButtonText: {
    color: "#FFF",
    fontSize: 10, // Texte légèrement plus petit
    fontFamily: "Kanit_700Bold",
  },
});