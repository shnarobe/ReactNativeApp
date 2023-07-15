import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";

import styles from "./popularproductcard.style";

const PopularProductCard = ({ item, selectedProduct, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedProduct, item)}
      onPress={() => {
        handleCardPress(item);
      }}
    >
      <TouchableOpacity style={styles.logoContainer(selectedProduct, item)}>
        <Image
          source={{
            uri: checkImageURL(item.thumb)
              ? item.thumb
              : "https://placehold.co/600x400",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedProduct, item)} numberOfLines={1}>
          {item.description}
        </Text>
        <Text style={styles.location}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularProductCard;
