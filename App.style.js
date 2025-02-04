import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007AFF", // Bleu
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    opacity: 0.8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
  },
  loginButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  loginText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  signupButton: {
    borderColor: "white",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default s; // Export en tant que "s" pour un import plus court
