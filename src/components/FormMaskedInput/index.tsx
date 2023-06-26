import React, { FC } from "react";
import { Controller, Control, FieldError } from "react-hook-form";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

import styles from "./styles";
import { Color } from "../../constants";
import FormError from "../FormError";

export interface IFormMaskedInputProps {
  label: string;
  control: Control<any>;
  name: string;
  rules?: Record<string, any>;
  style?: StyleProp<ViewStyle>;
  icon?: () => JSX.Element | null;
  error?: FieldError;
  mask?: string;
  type?: string;
  options?: Record<string, any>;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  useOutput?: boolean;
  onSubmitEditing?: () => void;
}

const FormMaskedInput: FC<IFormMaskedInputProps> = ({
  label,
  control,
  name,
  rules,
  style,
  error,
  mask,
  type,
  options,
  keyboardType,
  returnKeyType,
  useOutput,
  onSubmitEditing,
}) => {
  return (
    <>
      <View style={[styles.root, style]}>
        <Text style={styles.labelText}>{label}</Text>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <MaskedTextInput
              ref={ref}
              key={name}
              onChangeText={(text, rawText) => {
                onChange(useOutput ? text : rawText);
              }}
              onBlur={() => {
                onBlur();
              }}
              value={value}
              style={styles.input}
              selectionColor={Color.darkGrey}
              mask={mask}
              type={type}
              options={options}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
            />
          )}
        />
      </View>
      <FormError error={error} />
    </>
  );
};

export default FormMaskedInput;
