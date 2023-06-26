import { StyleSheet } from "react-native";

import { Color } from "../../constants/Color";
import { Styles } from "../../constants/Styles";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 60,
  },
  pressable: {
    paddingTop: 40,
    zIndex: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.white,
    marginBottom: 30,
  },
  innerPressableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  circle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
  },
  circleText: {
    position: "absolute",
    fontWeight: "700",
  },
  animatedLineContainer: {
    position: "absolute",
    top: 40,
    backgroundColor: Color.white,
    zIndex: 3,
  },
  animatedLine: {
    height: 6,
    bottom: 3,
    borderRadius: 4,
    zIndex: 1,
    ...Styles.cardElevation,
  },
  staticLine: {
    height: 6,
    bottom: 9,
    borderRadius: 2,
    zIndex: 0,
  },
  flex1: {
    flex: 1,
  },
  titleText: {
    position: "absolute",
    top: 30,
    width: 100,
    fontSize: 11,
    fontWeight: "700",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
});

export default styles;
