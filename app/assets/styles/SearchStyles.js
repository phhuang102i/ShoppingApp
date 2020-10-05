import { StyleSheet } from "react-native";
import { StatusBarHeight } from "./StatusBar";

const styles = StyleSheet.create({
  search_page: {
    marginTop: StatusBarHeight,
    flex: 1,
  },
  search_bar: {
    borderColor: "grey",
    borderWidth: 0.5,
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    height: 45,
    alignItems: "center",
  },
  search_input: {
    flex: 1,
    paddingHorizontal: 5,
  },
  search_icon: {
    marginRight: 5,
  },
  search_recommendation_container: {
    marginTop: 25,
    height: 300,
    //borderColor: "grey",
    //borderWidth: 1,
  },
  search_recommendation_row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  search_recommendation_text: {
    fontSize: 14,
    fontWeight: "300",
    color: "deepskyblue",
  },
});

export default styles;
