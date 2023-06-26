import React, { FC } from "react";
import { Pressable } from "react-native";
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import styles from "./styles";

interface ITabProps {
  index: number;
  label: string;
  selectedIndex: number;
  onPress: () => void;
  tabWidth: number;
}

const Tab: FC<ITabProps> = ({
  index,
  label,
  selectedIndex,
  onPress,
  tabWidth,
}) => {
  const isSelected = index === selectedIndex;

  const animTextStyle = useAnimatedStyle(
    () => ({
      opacity: isSelected
        ? withTiming(0, { duration: 100 })
        : withTiming(1, { duration: 100 }),
    }),
    [selectedIndex]
  );

  return (
    <Pressable
      onPress={onPress}
      style={[styles.staticTab, { width: tabWidth }]}
    >
      <Reanimated.Text style={[styles.staticTabText, animTextStyle]}>
        {label}
      </Reanimated.Text>
    </Pressable>
  );
};

export default Tab;
