import React from "react";
import { View, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import sampleimages from "../components/sampleimage";

export default function Detail() {
  return (
    <View>
      <SliderBox images={sampleimages} sliderBoxHeight={400} />
    </View>
  );
}
