import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularproducts.style";
import { COLORS, SIZES } from "../../../constants";
import PoplarProductCard from "../../common/cards/popular/PopularProductCard";
import PopularProductCard from "../../common/cards/popular/PopularProductCard";
import useFetch from "../../../hook/useFetch";

//ActivityIndicator is used to generate a spinner
function PopularProducts() {
  const router = useRouter();
  //const isLoading = false;
  //const error = false;
  //call the useFetch method. Note that the variables data, isLoading and error are now beng returned from useFetch
  const { data, isLoading, error } = useFetch("product");
  console.log(data.products);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Products</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}> Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            colors={COLORS.primary}
          ></ActivityIndicator>
        ) : error ? ( //if its notloading and there is not an erro then display list
          <Text>Something went Wrong!</Text>
        ) : (
          <FlatList
            data={data.products}
            renderItem={({ item }) => (
              <PopularProductCard
                item={item}
                selectedProduct={item.name}
                handleCardPress={() =>
                  router.push(`/product-details/${item.product_id}`)
                }
              ></PopularProductCard>
            )}
            keyExtractor={(item) => item?.product_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          ></FlatList>
        )}
      </View>
    </View>
  );
}

export default PopularProducts;
