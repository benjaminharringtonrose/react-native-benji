import { StyleSheet } from "react-native";

import { Color } from "../../constants/Color";

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    zIndex: 999,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    alignSelf: "center",
    backgroundColor: Color.white,
  },
  errorText: {
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
