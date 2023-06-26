import { StyleSheet } from "react-native";

import { Color } from "./Color";

export const Styles = StyleSheet.create({
  cardElevation: {
    shadowColor: Color.grey,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
  },
});
