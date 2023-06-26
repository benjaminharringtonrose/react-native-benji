import React, { FC } from "react";
import { View } from "react-native";
import { TabSelector } from "react-native-benji";

import styles from "./styles";

const TABS = [
  {
    index: 0,
    label: "Stored / Discharged",
    component: <View style={{ flex: 1, backgroundColor: "red" }} />,
  },
  {
    index: 1,
    label: "Summary",
    component: <View style={{ flex: 1, backgroundColor: "yellow" }} />,
  },
];

const TopHalfPlaceHolderView: FC = () => <View style={styles.flex} />;

const TabExampleScreen: FC = () => {
  return (
    <View style={styles.root}>
      <TopHalfPlaceHolderView />
      <View style={styles.bottomHalfContainer}>
        <TabSelector tabs={TABS} />
      </View>
    </View>
  );
};

export default TabExampleScreen;
