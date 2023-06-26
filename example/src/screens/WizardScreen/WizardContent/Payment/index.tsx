import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Payment: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{"Payment"}</Text>
    </View>
  );
};

export default Payment;
