import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3ABA",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  workspace: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default s;
