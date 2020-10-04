import React, { useState } from "react";
import { View, Text } from "react-native";
import BottomNavigation, {
  FullTab,
} from "react-native-material-bottom-navigation";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

export default function BottomBar() {
  const [activetab, switch_tab] = useState("home");
  const tabs = [
    {
      key: "home",
      icon: "home",
      label: "首頁",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "search",
      icon: "search",
      label: "搜尋",
      barColor: "lightblue",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "cart",
      icon: "shopping-cart",
      label: "購物車",
      barColor: "#E64A19",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "user",
      icon: "person",
      label: "會員",
      barColor: "dimgrey",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
  ];
  const renderIcon = (icon) => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  );

  const renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab.icon)}
    />
  );
  const handleTabPress = (newtab) => {
    switch_tab(newtab.key);
    Actions[newtab.key].call();
  };
  return (
    <BottomNavigation
      activeTab={activetab}
      onTabPress={handleTabPress}
      renderTab={renderTab}
      tabs={tabs}
    />
  );
}
