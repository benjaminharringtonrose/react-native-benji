import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export interface IFormSectionProps {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[] | null;
}

const FormSection: FC<IFormSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        {children}
      </View>
    </View>
  );
};

export default FormSection;
