import { StyleSheet } from "react-native";

import { Color } from "../../constants/Color";

const CardElevation = {
  shadowColor: Color.grey,
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.5,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    ...CardElevation,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.lightGrey,
  },
  titleText: {
    fontWeight: "700",
  },
  descriptionText: {
    marginTop: 5,
    fontWeight: "400",
    fontSize: 12,
    marginBottom: 20,
  },
});

export default styles;
