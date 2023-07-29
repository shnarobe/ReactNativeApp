import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const walkthrough = ["one", "two", "three", "four"];
const { height, width } = Dimensions.get("window");
function Login() {
  //this hook keeps track of the scroll position
  //const scrollX = React.useRef(new Animated.Value(0)).current;
  /**NOTE: i used the useStae hook to keep track of the scroll x position of the user.
   * Now in function dot I divide the x scrollposition by the width of the screen. This gives an indication as to which
   * image or item they're on. e.g with three items and a screen with of 360, if the scroll x is 0-359 then they are on the first item,
   * 360-719(360-720 is second item) and 720 3rd item. thus the value of dot position ranges from 0-1[1st item],1-2[2nd item],2-3[3rd item]
   * Using the calculated dot position I can know which dot should be active.
   * The interpolate method simply maps the range of continuos values to a discreet one as follows 0-1 get maps to 0 and 1-2 gets mapped to 1 etc.
   * same concept for output
   */
  [scrollX, setScrollX] = useState(0);
  console.log("width", width);
  console.log("scroll X position", scrollX);

  const Dots = () => {
    let dotPosition = Animated.divide(scrollX, width);
    console.log("dotPosition", { dotPosition });
    console.log("width", width);
    console.log("scroll X position", scrollX);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {walkthrough.map((item, index) => {
          console.log("in dot", scrollX, width);
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ["gray", "blue", "gray"],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}
            ></Animated.View>
          );
        })}
      </View>
    );
  };
  function RenderFooter() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: height * 0.2,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 2,
        }}
      >
        <Dots></Dots>
        {/** Buttons*/}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              flex: 1,
              borderRadius: 3,
              width: 20,
            }}
          >
            <Text label="Join Now"> Join</Text>
          </TouchableOpacity>

          <Text
            label="Register"
            style={{
              backgroundColor: "blue",
              flex: 1,
              borderRadius: 3,
              marginLeft: 2,
              width: 20,
            }}
          >
            Register
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "white" }}>
      <Animated.FlatList
        data={walkthrough}
        keyExtractor={(item) => item}
        decelerationRate="fast"
        horizontal
        snapToInterval={width}
        showsHorizontalScrollIndicator={true}
        scrollEventThrottle={16}
        onScroll={(e) => {
          console.log("scroll x position", scrollX);
          sx = e.nativeEvent.contentOffset.x;
          setScrollX(sx);
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX }, //capture the x position
                },
              },
            ],
            { useNativeDriver: false }
          );
        }}
        renderItem={({ item, index }) => {
          return (
            /**Note that if {} are used to wrap the anoymous function then values to be returned must be placed within ()
             * However, one can simply wrap everythin within () and not use the {} to achieve the same result.
             */
            <View
              style={{
                justifyContent: "center",
                width: width,
              }}
            >
              <View style={{ flex: 1 }}>{/**Image */}</View>

              <View
                style={{
                  height: height * 0.35,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingHorizontal: 5,
                }}
              >
                {/**Title */}
                <Text style={{ fontSize: 36, color: "black" }}>{item}</Text>
                {console.log("title", scrollX, width)}
                {/**Description */}
                <Text
                  style={{ marginTop: 2, textAlign: "center", color: "black" }}
                >
                  {item}
                </Text>
              </View>
            </View>
          );
        }}
      ></Animated.FlatList>
      <RenderFooter></RenderFooter>
    </SafeAreaProvider>
  );
}

export default Login;
