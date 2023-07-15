import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

function IconContainer() {
  return (
    <View>
      <Image
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        source={require("../assets/images/logo-icon-01.png")}
      ></Image>
    </View>
  );
}

export default IconContainer;
