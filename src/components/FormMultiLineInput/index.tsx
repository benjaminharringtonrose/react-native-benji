import React, { FC } from "react";
import { Controller, Control, FieldError } from "react-hook-form";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  KeyboardTypeOptions,
  TextInput,
  ReturnKeyTypeOptions,
} from "react-native";

import styles from "./styles";
import { Color } from "../../constants";
import FormError from "../FormError";

export interface IFormMultiLineInputProps {
  label: string;
  control: Control<any>;
  name: string;
  rules?: Record<string, any>;
  style?: StyleProp<ViewStyle>;
  error?: FieldError;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const FormMultiLineInput: FC<IFormMultiLineInputProps> = ({
  label,
  control,
  name,
  rules,
  style,
  error,
  keyboardType,
  returnKeyType,
  onSubmitEditing,
  autoCapitalize,
}) => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={[styles.root, style]}>
        <Text style={styles.labelText}>{label}</Text>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextInput
              ref={ref}
              key={name}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              selectionColor={Color.darkGrey}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              autoCapitalize={autoCapitalize}
              multiline
              underlineColorAndroid="transparent"
            />
          )}
        />
      </View>
      <FormError error={error} />
    </View>
  );
};

export default FormMultiLineInput;
