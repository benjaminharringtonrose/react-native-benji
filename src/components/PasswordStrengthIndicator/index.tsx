import Icon from "@expo/vector-icons/Ionicons";
import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { usePasswordStrengthIndicator } from "./usePasswordStrengthIndicator";
import { Color } from "../../constants";
import { TRequirements } from "../types";

export { usePasswordStrengthIndicator };

interface IProps {
  password: string;
  requirements: TRequirements;
}

const PasswordStrengthIndicator: FC<IProps> = ({ password, requirements }) => {
  const { requirementsArr, validRequirements, charactersRemainingLabel } =
    usePasswordStrengthIndicator({
      password,
      requirements,
    });

  return (
    <View style={styles.root}>
      <View style={styles.indicators}>
        {requirementsArr.map((req, idx) => {
          const [fieldName] = Object.keys(req).slice(-1);
          const reqName = Object.keys(requirementsArr[idx])[0];
          const isFirst = idx === 0;
          const isLast = idx === Object.keys(requirements).length - 1;
          const isFirstStyles = isFirst && { marginLeft: 0, marginRight: 4 };
          const isLastStyles = isLast && { marginRight: 0 };
          const isSelectedAndValid =
            reqName === fieldName && validRequirements[fieldName];
          const backgroundColor = isSelectedAndValid
            ? Color.success
            : Color.error;
          if (!req.length) {
            return (
              <View
                key={idx}
                style={[
                  styles.indicator,
                  isFirstStyles,
                  isLastStyles,
                  { backgroundColor },
                ]}
              />
            );
          }
          return null;
        })}
      </View>
      <View>
        <Text style={styles.charactersText}>{charactersRemainingLabel}</Text>
        <View style={styles.row}>
          {requirementsArr.map((req, idx) => {
            const [fieldName] = Object.keys(req).slice(-1);
            const reqName = Object.keys(requirementsArr[idx])[0];
            const isSelectedAndValid =
              reqName === fieldName && validRequirements[fieldName];
            if (!req.length) {
              return (
                <View key={idx} style={styles.validationContainer}>
                  <View style={styles.row}>
                    <Icon
                      name={isSelectedAndValid ? "checkmark" : "close"}
                      color={isSelectedAndValid ? Color.success : Color.error}
                    />
                    <Text style={styles.requirementText}>{fieldName}</Text>
                  </View>
                </View>
              );
            }
            return null;
          })}
        </View>
      </View>
    </View>
  );
};

export default PasswordStrengthIndicator;
