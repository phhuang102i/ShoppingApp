import React from "react";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import styles from "../assets/styles/CommonStyles";

export default function Home() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => Actions.product()}
        style={styles.route_button}
      >
        <Text style={styles.button_text}>Go to Product page</Text>
      </TouchableOpacity>
    </View>
  );
}
