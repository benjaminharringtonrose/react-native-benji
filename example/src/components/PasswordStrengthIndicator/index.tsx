import Icon from "@expo/vector-icons/Ionicons";
import React, { FC, useEffect, useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { Color } from "../../constants";

const regexUppercase = /[A-Z]/;
const regexLowercase = /[a-z]/;
const regexSymbol = /[!@#$%^&*(),.?":{}|<>]/;
const regexNumber = /\d/;

type TRequirement =
  | "length"
  | "lowercase"
  | "uppercase"
  | "numbers"
  | "symbols";

type TRequirements = Record<TRequirement, boolean | number>;

interface IProps {
  password: string;
  requirements: TRequirements;
}

const PasswordStrengthIndicator: FC<IProps> = ({ password, requirements }) => {
  const [validRequirements, setValidRequirements] = useState(0);

  const requirementsArr = Object.entries(requirements).map(([prop, value]) => ({
    [prop]: value,
  }));

  const validatePassword = (password: string, requirements: TRequirements) => {
    let validRequirements = 0;
    if (requirements.lowercase && regexLowercase.test(password)) {
      validRequirements += 1;
    }
    if (requirements.uppercase && regexUppercase.test(password)) {
      validRequirements += 1;
    }
    if (requirements.numbers && regexNumber.test(password)) {
      validRequirements += 1;
    }
    if (requirements.symbols && regexSymbol.test(password)) {
      validRequirements += 1;
    }
    return validRequirements;
  };

  useEffect(() => {
    setValidRequirements(validatePassword(password, requirements));
  }, [password]);

  return (
    <View style={styles.root}>
      <View style={styles.indicators}>
        {requirementsArr.map((req, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === Object.keys(requirements).length - 1;
          const isFirstStyles = isFirst && { marginLeft: 0, marginRight: 4 };
          const isLastStyles = isLast && { marginRight: 0 };
          if (!req.length) {
            return (
              <View
                style={[
                  styles.indicator,
                  isFirstStyles,
                  isLastStyles,
                  {
                    backgroundColor:
                      idx <= validRequirements ? Color.success : Color.error,
                  },
                ]}
              />
            );
          }
        })}
      </View>
      <View>
        <Text style={{ paddingVertical: 8, fontSize: 10 }}>{`${max(
          0,
          Number(requirements.length) - password.length
        )} characters remaining`}</Text>
        <View style={{ flexDirection: "row" }}>
          {requirementsArr.map((req, idx) => {
            if (!req.length) {
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      name={idx <= validRequirements ? "checkmark" : "close"}
                      color={
                        idx <= validRequirements ? Color.success : Color.error
                      }
                    />
                    <Text style={{ fontSize: 10, paddingLeft: 5 }}>
                      {Object.keys(req).pop()}
                    </Text>
                  </View>
                </View>
              );
            }
          })}
        </View>
      </View>
    </View>
  );
};

const max = (a: number, b: number) => {
  return a > b ? a : b;
};

export default PasswordStrengthIndicator;
