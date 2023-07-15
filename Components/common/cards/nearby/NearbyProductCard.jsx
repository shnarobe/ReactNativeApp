import React from "react";
import { View, Text } from "react-native";

import styles from "./nearbyproductcard.style";

function NearbyProductCard({
  sellerName,
  sellerLocation,
  sellerProfile,
  sellerPage,
}) {
  return (
    <View>
      <Text>{sellerName}</Text>
    </View>
  );
}

export default NearbyProductCard;
