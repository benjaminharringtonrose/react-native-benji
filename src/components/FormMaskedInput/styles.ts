import { StyleSheet } from "react-native";

import { Color } from "../../constants/Color";

const styles = StyleSheet.create({
  root: {
    minHeight: 50,
    borderColor: Color.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
  },
  labelText: {
    padding: 5,
    fontSize: 12,
    color: Color.darkGrey,
  },
  input: {
    padding: 5,
  },
  errorText: {},
});

export default styles;
