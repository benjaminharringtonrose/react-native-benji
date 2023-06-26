import { StyleSheet } from "react-native";

import { Color } from "../../constants/Color";

const styles = StyleSheet.create({
  dropdownContainer: {
    minHeight: 50,
    borderColor: Color.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 5,
  },
  labelText: {
    padding: 5,
    fontSize: 12,
    color: Color.darkGrey,
  },
  valueText: {
    padding: 5,
  },
  bottomSheet: {
    borderColor: Color.lightGrey,
    borderWidth: 1,
  },
  icon: {
    padding: 5,
  },
  modalTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 17,
  },
});

export default styles;
