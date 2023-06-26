import { StyleSheet } from "react-native";

import { Color } from "../../constants";

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: Color.white,
    padding: 20,
    marginVertical: 100,
    borderRadius: 10,
  },
  image: {
    backgroundColor: Color.lightGrey,
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
  },
  titleText: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 17,
  },
  topMargin: {
    marginTop: 20,
  },
  processCompletedContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.lightGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  processCompletedText: {
    fontSize: 21,
    color: Color.darkGrey,
  },
});

export default styles;
