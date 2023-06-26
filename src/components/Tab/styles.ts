import { StyleSheet } from "react-native";

import { Color } from "../../constants";

const styles = StyleSheet.create({
  staticTab: {
    zIndex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.lightGrey,
  },
  staticTabText: {
    fontSize: 12,
    color: Color.primary,
  },
});

export default styles;
