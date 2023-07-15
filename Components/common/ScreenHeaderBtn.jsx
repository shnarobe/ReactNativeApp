import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  //note the file path needed for accessing assets from within the common folder within components parent folder
  //require("../../assets/icons/menu.png")}
  //the iconUrl variable despite being a string file path actully appears as a number,{"IconUrl":5} for example
  //use require for local images and uri fo http images
  console.log("ICON URL", { iconUrl }, typeof iconUrl);
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {}}
    >
      <Image
        resizeMode="cover"
        source={iconUrl}
        onPress={() => {}}
        style={{ backgroundColor: "white", width: 40, height: 40 }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
