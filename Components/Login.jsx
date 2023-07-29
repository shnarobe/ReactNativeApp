import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, Animated, Dimensions } from "react-native";

const walkthrough = ["one", "two", "three"];
const { width_, height_ } = Dimensions.get("screen");

function Login() {
  //this hook keeps track of the scroll position
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, overflow: "hidden", backgroundColor: "white" }}>
      <Animated.FlatList
        data={walkthrough}
        keyExtractor={(item) => item}
        decelerationRate="fast"
        horizontal
        snapToInterval={width_}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          // scrollX = e.nativeEvent.contentOffset.x
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX }, //capture the x position
              },
            },
          ],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          return (
            /**Note that if {} are used to wrap the anoymous function then values to be returned must be placed within ()
             * However, one can simply wrap everythin within () and not use the {} to achieve the same result.
             */
            <View
              style={{
                justifyContent: "center",
                width: width_,
              }}
            >
              {/*walkthrought images*/}
              <View style={{ flex: 1 }}></View>

              {/**Title and descriptions */}
              <View
                style={{
                  height: 80,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              >
                <Text style={{ fontSize: 36 }}>Genuine Heading</Text>

                <Text
                  style={{ marginTop: 2, textAlign: "center", color: "gray" }}
                >
                  Description
                </Text>
              </View>
            </View>
          );
        }}
      ></Animated.FlatList>
    </View>
  );
}

export default Login;
