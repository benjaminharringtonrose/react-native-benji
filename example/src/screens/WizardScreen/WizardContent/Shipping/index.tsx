import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Shipping: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{"Shipping"}</Text>
    </View>
  );
};

export default Shipping;
