import React, { FC, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import styles from "./styles";
import Tab from "../Tab";
import { ITab } from "../types";

export interface ITabSelectorProps {
  tabs: ITab[];
}

const TabSelector: FC<ITabSelectorProps> = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { width } = useWindowDimensions();

  const tabWidth = width / tabs.length;

  const animTabStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: withTiming(selectedIndex * tabWidth),
        },
      ],
    }),
    [selectedIndex]
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.row}>
        <Reanimated.View
          style={[styles.tab, { width: tabWidth }, animTabStyle]}
        >
          <Text style={styles.tabText}>{tabs[selectedIndex].label}</Text>
        </Reanimated.View>
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.index}
              index={tab.index}
              selectedIndex={selectedIndex}
              label={tab.label}
              onPress={() => setSelectedIndex(tab.index)}
              tabWidth={tabWidth}
            />
          );
        })}
      </View>
      {tabs[selectedIndex].component}
    </View>
  );
};

export default TabSelector;
