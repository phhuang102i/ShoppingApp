import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  gridViewContent: {
    justifyContent: "space-between",
  },
  itemContainer: {
    justifyContent: "flex-start",
    borderRadius: 5,
    borderColor: "dimgrey",
    borderWidth: 0.5,
    padding: 10,
    height: 300,
  },
  itemName: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
    marginTop: 10,
    marginLeft: 10,
  },
  itemDescription: {
    marginTop: 5,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  itemPrice: {
    fontWeight: "600",
    fontSize: 20,
    color: "black",
    marginTop: 10,
    marginLeft: 10,
  },
  sectionHeader: {
    //flex: 1,
    fontSize: 25,
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
    //backgroundColor: "#636e72",
    color: "black",
    padding: 5,
  },
  top_product_container: {
    borderRadius: 5,
    borderColor: "dimgrey",
    borderWidth: 0.5,
    flex: 1,
    padding: 10,
    height: 300,
  },
  top_product_pic_container: {
    borderColor: "black",
    height: 200,
    borderWidth: 1,
    //flex: 1,
    flexDirection: "row",
  },
  top_product_text: {
    flex: 1.5,
    marginLeft: 0,
    borderWidth: 0.5,
    borderColor: "blue",
  },
  productlist_pic: {
    flex: 1,
  },
  productlist_pic_container: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
  },
});

export default styles;
