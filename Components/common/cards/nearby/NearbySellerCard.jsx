import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";

import styles from "./nearbysellercard.style";
import { Link } from "expo-router";

function NearbySellerCard({
  sellerName,
  sellerLocation,
  sellerProfile,
  sellerPage,
  handleNavigate,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer} onPress={handleNavigate}>
        <Image
          source={{
            uri: checkImageURL(sellerProfile)
              ? sellerProfile
              : "https://placehold.co/600x400",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        ></Image>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {sellerName}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {sellerLocation}
        </Text>
        <Text style={styles.jobType}>{sellerPage}</Text>
        <Link href={sellerPage}> View Profile</Link>
      </View>
    </TouchableOpacity>
  );
}

export default NearbySellerCard;
