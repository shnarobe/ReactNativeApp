import { React, useCallback, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../Components";
import Icons from "../../constants/icons";

function ProductDetails() {
  //get arguments passed via route such as id etc
  const params = useSearchParams();
  const router = useRouter();
  //get the product id from route
  const pid = params.id;
  const { data, isLoading, error, reFetch } = useFetch("product", {
    product_id: pid,
  });
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "white" }}>
      {/**Use the Stack.Screen to configure the hearder especially of a screen */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "dodgerblue" },
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={Icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            ></ScreenHeaderBtn>
          ),
        }}
      ></Stack.Screen>
      <Text>route</Text>
    </SafeAreaProvider>
  );
}

export default ProductDetails;
