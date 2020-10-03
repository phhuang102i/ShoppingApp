import React, { useState } from "react";
import { View, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import sampleimages from "../components/sampleimage";
import styles from "../assets/styles/DetailViewStyles";
import { Feather } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

export default function Detail(props) {
  const product_index = props.product_index ? props.product_index : 0;
  const images = ["product_", String(product_index), "_images"].join("");
  return (
    <>
      <View style={styles.slider_container}>
        <SliderBox
          images={sampleimages[images]}
          sliderBoxHeight={350}
          autoplay
          circleLoop
        />
      </View>
      <View style={styles.description_contaier}>
        <Text style={styles.description_title}>商品描述</Text>
        <Text style={styles.description_detail}>
          北海鱈魚香絲是屬於水產加工調味乾製品類,他主要是由冷凍魚漿製造而成的,再添加其他的食品添加物,使原料魚漿最終成為具有鮮味的鱈魚香絲休閒食品。他是利用擂潰、乾燥、發泡等專業技術製造而成的。
        </Text>
      </View>
      <View style={styles.choice_container}>
        <Text style={styles.choice_title}>
          規格 <Feather name="help-circle" size={18} color="dimgrey" />
        </Text>
        <Selection />
      </View>
    </>
  );
}

function Selection(props) {
  const [choice, select_choice] = useState(0);
  return (
    <DropDownPicker
      items={[
        {
          label: "小包裝(300g)",
          value: 0,
        },
        {
          label: "大包裝(700g)",
          value: 1,
        },
      ]}
      defaultValue={choice}
      containerStyle={{ height: 40 }}
      style={{ backgroundColor: "#fafafa" }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{ backgroundColor: "#fafafa" }}
      onChangeItem={(item) => select_choice(item.value)}
    />
  );
}
