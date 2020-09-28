import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../assets/styles/GridViewStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

export default function ProductHeader(props) {
  return (
    <View style={styles.top_product_container}>
      <Text style={styles.sectionHeader}>{props.product_type}</Text>

      <TouchableOpacity
        style={styles.top_product_pic_container}
        onPress={() => Actions.detail()}
      >
        <ImageBackground
          source={require("../assets/media/product.png")}
          style={styles.productlist_pic}
          imageStyle={{ resizeMode: "contain" }}
        />
        <View style={styles.top_product_text}>
          <Text style={styles.itemName}>{props.product_data.name}</Text>
          <Text style={styles.itemDescription}>
            {props.product_data.description}
          </Text>
          <Text style={styles.itemPrice}>NT$ {props.product_data.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
