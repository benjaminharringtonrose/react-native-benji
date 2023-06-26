import Icon from "@expo/vector-icons/AntDesign";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

interface IProps {
  onPress: () => void;
}

const AddButton: FC<IProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="plus" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default AddButton;
