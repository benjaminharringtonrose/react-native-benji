import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
} from "react-native";

import styles from "./styles";
import { Color, Styles } from "../../constants";

type TAllowedButtonStyles = Pick<
  ViewStyle,
  | "padding"
  | "paddingBottom"
  | "paddingTop"
  | "paddingLeft"
  | "paddingRight"
  | "paddingHorizontal"
  | "margin"
  | "marginBottom"
  | "marginTop"
  | "marginLeft"
  | "marginRight"
  | "marginHorizontal"
  | "flex"
>;

export interface IButtonProps {
  onPress: () => void;
  label?: string;
  labelColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  loading?: boolean;
  style?: TAllowedButtonStyles;
}

const Button: FC<IButtonProps> = ({
  onPress,
  label,
  loading = false,
  labelColor = Color.black,
  backgroundColor = Color.white,
  borderColor = Color.transparent,
  borderRadius = 25,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.root,
        {
          backgroundColor,
          borderColor,
          borderRadius,
          ...Styles.cardElevation,
        },
        style,
      ]}
    >
      {!!label && !loading && (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}
      {loading && <ActivityIndicator />}
    </TouchableOpacity>
  );
};

export default Button;
