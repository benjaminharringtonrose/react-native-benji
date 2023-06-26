import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    marginTop: 2,
  },
  indicators: {
    flex: 1,
    flexDirection: "row",
  },
  indicator: {
    flex: 1,
    height: 10,
    borderRadius: 2,
    marginRight: 4,
  },
  requirementText: {
    fontSize: 10,
    paddingLeft: 5,
  },
  row: {
    flexDirection: "row",
  },
  validationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  charactersText: {
    paddingVertical: 8,
    fontSize: 10,
  },
});

export default styles;
