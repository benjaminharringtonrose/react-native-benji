import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Billing: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{"Billing"}</Text>
    </View>
  );
};

export default Billing;
