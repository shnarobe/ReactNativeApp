//import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
//use this as the default safe area provider which works for both ios and android
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../Components/common/ScreenHeaderBtn";
import Welcome from "../Components/home/welcome/Welcome";
import Login from "../Components/Login";
import MapHolder from "../Components/MapHolder";
import PopularProducts from "../Components/home/popular/PopularProducts";
import { COLORS, icons, images, SIZES } from "../constants";
import NearbyProducts from "../Components/home/nearby/NearbyProducts";

//import { Button } from "bootstrap";

export default function Home() {
  console.log("Type of icons exported from file is: ", typeof icons, icons);
  //used for ceating the laout of the app
  const router = useRouter();

  //retrieve orientation of device on ios or android whenever orientation changes,landscape or potrait
  const _orientation = useDeviceOrientation();
  console.log(
    "orientation",
    _orientation,
    typeof _orientation,
    _orientation === "landscape"
  );
  //updates the dimensions automatically when screen size changes
  const { height, width, scale, fontScale } = useWindowDimensions();
  console.log("updated dimensions: ", height, width);
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(count + 1);
    alert("Image pressed!");
  };

  //co
  //const status_bar = StatusBar([]);
  //console.log(status_bar);
  //const y=90;
  let x;
  //let a=x.toString();
  const handleText = () => {
    console.log("Text pressed");
  };
  console.log("icons.menu", icons.menu, typeof icons.menu);
  return (
    //the platform module allows us to identify the type of mobile phone we're on. we use the property currentHeight on the StatusBar
    //function to get it's height and place a padding equal to that height so that all content is below the satus bar
    //a View is a component like a div designed to hold other components
    //we can replace View with SafeAreaView to add padding so that all elements are not ostructed by the notch on phones(ios)
    //because images dont have an onpress event we can use touchablewhich can be applied to any component.

    //1. define the navigation bar at top using the Stak.screen component with various options
    //2.Below navigation bar create a scrowview
    <SafeAreaProvider style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        styles={{ height: () => (_orientation === "landscape" ? "40%" : null) }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension="60%"
              ></ScreenHeaderBtn>
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
              ></ScreenHeaderBtn>
            ),
            headerTitle: "FoundIt!",
          }}
        ></Stack.Screen>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: 5 }}>
            <Welcome></Welcome>
            <PopularProducts></PopularProducts>
            <NearbyProducts></NearbyProducts>
            <Login></Login>
            <MapHolder></MapHolder>
            <MapHolder></MapHolder>
            <MapHolder></MapHolder>
            <MapHolder></MapHolder>
            <MapHolder></MapHolder>
            <MapHolder></MapHolder>
            <MapHolder></MapHolder>
          </View>
        </ScrollView>

        <Text style={styles.baseText}>Found It!</Text>
        <Text onPress={handleText}>Krishna's first app in React Native!</Text>
        <TouchableHighlight onPress={onPress}>
          <Image
            source={{
              uri: "https://picsum.photos/id/237/200/300",
              width: useDeviceOrientation() === "landscape" ? 300 : 200,
              height: useDeviceOrientation() === "landscape" ? 200 : 300,
            }}
          ></Image>
        </TouchableHighlight>
        <Button
          color="orange"
          title="Like Dog!"
          onPress={() => {
            Alert.alert("My Title", "My Message", [
              {
                text: "Yes",
                onPress: () => {
                  alert("You liked!");
                },
              },
              {
                text: "No",
                onPress: () => {
                  alert("You disliked!");
                },
              },
            ]);
          }}
        ></Button>
        <Text>{count}</Text>
        <Button
          title="Feedback"
          onPress={() => {
            Alert.prompt(
              "FeedBack Form",
              "Tell us what you think about the image.",
              (text) => {
                alert("You said:", text);
              }
            );
          }}
        ></Button>
        <StatusBar style="auto" />
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          flexdirection: "row",
          height: 30,
          width: 30,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
          flexdirection: "row",
          height: 30,
          width: 30,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          flexdirection: "row",
          height: 30,
          width: 30,
        }}
      ></View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    fontFamily: "sans-serif",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  baseText: {
    fontFamily: "sans-serif",
    fontSize: 25,
  },
});
