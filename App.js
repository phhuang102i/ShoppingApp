import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import Home from "./app/screens/Home";
import Product from "./app/screens/Product";
import Detail from "./app/screens/Detail";
import BottomBar from "./app/components/BottomBar";
import Search from "./app/screens/Search";
import Member from "./app/screens/Member";
import Cart from "./app/screens/Cart";

export default function App() {
  return (
    <>
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" hideNavBar={true} />
          <Scene key="detail" component={Detail} backTitle=" " />
          <Scene
            key="product"
            component={Product}
            title="Product"
            hideNavBar={true}
          />
          <Scene
            key="search"
            component={Search}
            title="Search"
            hideNavBar={true}
          />
          <Scene key="cart" component={Cart} title="Cart" hideNavBar={true} />
          <Scene
            key="member"
            component={Member}
            title="Member"
            hideNavBar={true}
          />
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
