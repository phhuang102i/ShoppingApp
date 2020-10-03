import React, { useState } from "react";
import { View, Text, ImageBase, ImageBackground } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import styles from "../assets/styles/GridViewStyles";
import { Actions } from "react-native-router-flux";
import { SectionGrid } from "react-native-super-grid";
import sampledata from "../components/sampledata";
import ProductHeader from "../components/ProductHeader";
import sampleimages from "../components/sampleimage";

export default function Product() {
  return (
    <SectionGrid
      itemDimension={120}
      // staticDimension={300}
      // fixed
      spacing={10}
      sections={[
        {
          title: "類別1",
          topdata: sampledata[0],
          index: 1,
          data: sampledata.slice(1, 6),
        },
        {
          title: "類別2",
          topdata: sampledata[6],
          index: 2,
          data: sampledata.slice(7, 12),
        },
        {
          title: "類別3",
          topdata: sampledata[12],
          index: 3,
          data: sampledata.slice(13, 20),
        },
      ]}
      style={styles.gridView}
      contentContainerStyle={styles.gridViewContent}
      renderItem={({ item, section, index }) => (
        <View
          key={index}
          style={[
            styles.itemContainer,
            /*{
              backgroundColor:
                "#" + (((1 << 24) * Math.random()) | 0).toString(16),
            },*/
          ]}
        >
          <TouchableOpacity
            style={styles.productlist_pic_container}
            onPress={() => Actions.detail()}
          >
            <ImageBackground
              source={sampleimages.random_images[Math.floor(Math.random() * 7)]}
              style={styles.productlist_pic}
              imageStyle={{ resizeMode: "contain" }}
            />
          </TouchableOpacity>

          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>NT$ {item.price}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <ProductHeader
          product_index={section.index}
          product_type={section.title}
          product_data={section.topdata}
        />
      )}
    />
  );
}
