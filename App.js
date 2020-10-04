import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import Home from "./app/screens/Home";
import Product from "./app/screens/Product";
import Detail from "./app/screens/Detail";
import BottomBar from "./app/components/BottomBar";

export default function App() {
  return (
    <>
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="detail" component={Detail} title="Detail" />
          <Scene key="product" component={Product} title="Product" />
        </Stack>
      </Router>
      <BottomBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
