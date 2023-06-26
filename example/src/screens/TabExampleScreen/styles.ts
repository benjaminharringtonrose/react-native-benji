import { StyleSheet } from "react-native";
import { Color } from "../../constants";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  root: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  bottomHalfContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default styles;
