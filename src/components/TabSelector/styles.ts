import { StyleSheet } from "react-native";

import { Color } from "../../constants";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  tab: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: Color.white,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    color: Color.primary,
    fontWeight: "700",
  },
});

export default styles;
