import React, { FC } from "react";
import { View, Text } from "react-native";
import { latinText } from "../../../constants/Data";

import styles from "./styles";

const StepThree: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{`• ${latinText[2]}`}</Text>
      <Text style={styles.text}>{`• ${latinText[0]}`}</Text>
      <Text style={styles.text}>{`• ${latinText[1]}`}</Text>
    </View>
  );
};

export default StepThree;
