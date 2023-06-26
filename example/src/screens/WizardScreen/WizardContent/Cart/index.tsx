import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Cart: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{"Cart"}</Text>
    </View>
  );
};

export default Cart;
