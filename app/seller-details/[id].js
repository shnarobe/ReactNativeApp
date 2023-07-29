import React from "react";
import {
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
  Company,
} from "../../Components";
import { COLORS, icons, SIZES } from "../../constants";

const SellerDetails = () => {
  const param = useSearchParams();
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <Text>route</Text>
    </SafeAreaProvider>
  );
};

export default SellerDetails;
