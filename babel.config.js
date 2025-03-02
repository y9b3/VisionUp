module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "module:react-native-dotenv", // ✅ Pour charger les variables d'environnement
      "react-native-reanimated/plugin",
    ],
  };
};
