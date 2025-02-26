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

  // ✅ STYLES DES BOUTONS FEEDBACK ✅
  feedbackButtonsContainer: {
    position: "absolute",
    bottom: height * 0.04,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0,
  },
  feedbackButton: {
    width: "38%",
    paddingVertical: 14,
    borderRadius: 23,
    alignItems: "center",
  },
  feedbackGreen: {
    backgroundColor: "#3AB54A",
  },
  feedbackBlue: {
    backgroundColor: "#0074FF",
  },
  feedbackButtonText: {
    color: "#FFF",
    fontSize: 10,
    fontFamily: "Kanit_700Bold",
  },

  // ✅ STYLES DES QUESTIONS ✅
  questionContainer: {
    position: "absolute",
    top: height * 0.43, // Juste en dessous du container en position swipe haut
    width: "90%",
    backgroundColor: "#192A56",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    opacity: 0, // Caché par défaut, animé par Reanimated
  },
  questionText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Kanit_700Bold",
    marginBottom: 10,
    textAlign: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  optionButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: "#34495E",
    borderRadius: 10,
    alignItems: "center",
  },
  optionButtonSelected: {
    backgroundColor: "#3AB54A",
  },
  optionText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Kanit_700Bold",
  },
});