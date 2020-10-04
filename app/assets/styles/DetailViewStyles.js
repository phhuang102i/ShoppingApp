import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  slider_container: {
    marginBottom: 10,
  },
  description_contaier: {
    borderColor: "lightgrey",
    borderBottomWidth: 0.5,
  },
  description_title: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  description_detail: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  choice_title: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  cart_bar: {
    flexDirection: "row",
    //flex: 1,
    //justifyContent: "space-evenly",
  },
  cart_button: {
    flex: 1,
    //alignItems: "center",
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "darkturquoise",
    alignItems: "center",
    paddingVertical: 5,
  },
  buy_button: {
    flex: 1,
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "lightcoral",
    alignItems: "center",
    paddingVertical: 5,
  },
  cart_text: {
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 10,
  },
  price_container: {
    marginTop: 30,
    alignItems: "flex-end",
    marginRight: 10,
    flex: 1,
  },
  price_text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
