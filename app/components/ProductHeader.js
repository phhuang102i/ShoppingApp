import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../assets/styles/GridViewStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import sampleimages from "./sampleimage";

export default function ProductHeader(props) {
  const imageidx = props.product_index
    ? ["product_", String(props.product_index), "_images"].join("")
    : "product_0_images";

  const image = sampleimages[imageidx][0];
  return (
    <View style={styles.top_product_container}>
      <Text style={styles.sectionHeader}>{props.product_type}</Text>

      <TouchableOpacity
        style={styles.top_product_pic_container}
        onPress={() => Actions.detail({ product_index: props.product_index })}
      >
        <ImageBackground
          source={image}
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
