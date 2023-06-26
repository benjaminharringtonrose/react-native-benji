import Icon from "@expo/vector-icons/AntDesign";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

interface IProps {
  onPress: () => object;
}

const BackButton: FC<IProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="left" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
