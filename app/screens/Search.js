import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../assets/styles/SearchStyles";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  const [search_value, change_search_value] = useState("");

  return (
    <View style={styles.search_page}>
      <View style={styles.search_bar}>
        <TextInput
          style={styles.search_input}
          onChangeText={(text) => change_search_value(text)}
          value={search_value}
          placeholder={"搜尋商品關鍵字"}
          maxLength={10}
        />
        <FontAwesome
          name="search"
          size={24}
          color="black"
          style={styles.search_icon}
        />
      </View>
      <View style={styles.search_recommendation_container}>
        <Recommendation />
      </View>
    </View>
  );
}

function Recommendation() {
  let samplerecommendation = [
    "熱狗幫",
    "IKEA鯊魚",
    "懶人沙發",
    "造型悠遊卡",
    "碎花洋裝",
    "室內拖鞋",
  ];

  return (
    <>
      <View style={styles.search_recommendation_row}>
        <TouchableOpacity onPress={() => console.log("linkpressed")}>
          <Text style={styles.search_recommendation_text}>
            {samplerecommendation[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.search_recommendation_text}>
            {samplerecommendation[1]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.search_recommendation_text}>
            {samplerecommendation[2]}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.search_recommendation_row}>
        <TouchableOpacity>
          <Text style={styles.search_recommendation_text}>
            {samplerecommendation[3]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.search_recommendation_text}>
            {samplerecommendation[4]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.search_recommendation_text}>
            {samplerecommendation[5]}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
