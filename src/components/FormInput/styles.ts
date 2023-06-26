import { StyleSheet } from "react-native";

import { Color } from "../../constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    minHeight: 50,
    borderColor: Color.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "column",
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
