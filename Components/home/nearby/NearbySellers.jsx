import { React, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import styles from "./nearbysellers.style";
import { SIZES, COLORS } from "../../../constants";

import useFetch from "../../../hook/useFetch";
import NearbySellerCard from "../../common/cards/nearby/NearbySellerCard";

//ActivityIndicator is used to generate a spinner
function NearbySellers() {
  const router = useRouter();
  const [sellerData, setSellerData] = useState([]);
  //const isLoading = false;
  //const error = false;
  //call the useFetch method. Note that the variables data, isLoading and error are now beng returned from useFetch
  const { data, isLoading, error } = useFetch("product");

  if (sellerData.length > 0) {
    setSellerData([]);
  }
  //setSellerData(data.seller);
  console.log("seller", data.seller);
  for (const property in data.seller) {
    sellerData.push(data.seller[property]);

    console.log(
      `${property}: ${data.seller[property]["settings"]["slr_full_name"]}`
    );
  }
  //setSellerData(sellerData);
  const handlePress = (id, name) => {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Products</Text>
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
          sellerData?.map((seller, index) => (
            //note the difference between {} and () in the anonymous functions
            //one returns a react native component,(), the other executes JS
            <NearbySellerCard
              sellerName={seller["settings"]["slr_full_name"]}
              sellerLocation={seller["settings"]["slr_city"]}
              sellerProfile={seller["thumb"]}
              sellerPage={seller["href"]}
              key={`nearby-seller-${seller?.seller_id}`}
              handleNavigate={() =>
                router.push(`/seller-details/${seller.seller_id}`)
              }
            ></NearbySellerCard>
          ))
        )}
      </View>
    </View>
  );
}

export default NearbySellers;
