import React, { FC } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { Switch, View, Text, StyleProp, ViewStyle } from "react-native";

import styles from "./styles";
import { Color } from "../../constants";
import FormError from "../FormError";

export interface IFormSwitchProps {
  label: string;
  control: Control<any>;
  name: string;
  rules?: Record<string, any>;
  error?: FieldError;
  style?: StyleProp<ViewStyle>;
  trueColor?: string;
  falseColor?: string;
}

const FormSwitch: FC<IFormSwitchProps> = ({
  name,
  control,
  rules,
  label,
  style,
  error,
  trueColor,
  falseColor,
}) => {
  return (
    <View style={[styles.root, style]}>
      <Text style={styles.labelText}>{label}</Text>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <Switch
            ios_backgroundColor={Color.medDarkGrey}
            thumbColor={Color.white}
            trackColor={{
              false: falseColor || Color.medDarkGrey,
              true: trueColor || Color.primary,
            }}
            value={value}
            onValueChange={onChange}
          />
        )}
      />
      <FormError error={error} />
    </View>
  );
};

export default FormSwitch;
