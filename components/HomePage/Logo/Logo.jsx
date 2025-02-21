import { Image, Text, View } from "react-native";
import { s } from "./Logo.style";
import VisionUpLogo from "../../../assets/logo.png";

export function Logo() {
  return (
    <View style={s.header}>
      <Image style={s.logo} source={VisionUpLogo}></Image>
      <Text style={s.text}>
        EXPOSEZ{"\n"}ECHANGEZ{"\n"}PROGRESSEZ pakdfg
      </Text>
    </View>
  );
}
