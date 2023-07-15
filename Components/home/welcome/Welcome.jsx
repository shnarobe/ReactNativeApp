import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
import styles from "./welcome.style";

const productTypes = ["Vegetables", "Fruits", "Lumber", "Sheep", "Goats"];

function Welcome() {
  console.log("Type of SIZES exported from file is: ", typeof SIZES, SIZES);
  const [activeProductType, setActiveProductType] = useState("Vegetables");
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello John</Text>
        <Text style={styles.welcomeMessage}>Find you products</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            onChange={() => {}}
            placeholder="Enter product to serach for..."
            style={{
              borderStyle: "solid",
              borderColor: "green",
              borderRadius: 5,
              borderWidth: 2,
            }}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtn}
          ></Image>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.tabsContainer}>
          <FlatList
            data={productTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setActiveProductType(item);
                  router.push(`/search/${item}`);
                }}
                style={styles.tab(activeProductType, item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          ></FlatList>
        </View>
      </View>
    </View>
  );
}

export default Welcome;
