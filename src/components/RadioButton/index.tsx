import React, { FC } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";

import styles from "./styles";
import { Color } from "../../constants";

interface IProps {
  isSelected: boolean;
  onPress: () => void;
  style: ViewStyle;
}

const RadioButton: FC<IProps> = ({ isSelected, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.root,
        isSelected && { borderColor: Color.primary, borderWidth: 6 },
        style,
      ]}
      onPress={onPress}
    />
  );
};

export default RadioButton;
