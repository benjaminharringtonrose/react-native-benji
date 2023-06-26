import { StyleSheet } from "react-native";

import { Color } from "../../constants/Color";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  flex1: {
    flex: 1,
  },
  componentContainer: {
    flex: 1,
    borderColor: Color.lightGrey,
    borderWidth: 2,
    borderRadius: 10,
  },
  descriptionContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },
  descriptionText: {
    color: Color.medDarkGrey,
    marginBottom: 20,
    minHeight: 35,
    width: "90%",
  },
  modalContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 20,
  },
  backButton: {
    flex: 1,
    marginTop: 20,
    marginRight: 10,
  },
  nextButton: {
    flex: 1,
    marginTop: 20,
  },
  helpText: {
    paddingLeft: 20,
    color: Color.darkGrey,
  },
});

export default styles;
