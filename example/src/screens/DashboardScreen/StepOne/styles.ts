import { StyleSheet } from "react-native";
import { Color } from "../../../constants/Color";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  text: {
    flex: 1,
    fontSize: 19,
    color: Color.darkGrey,
    justifyContent: "center",
  },
});

export default styles;
