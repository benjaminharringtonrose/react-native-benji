import Icon from "@expo/vector-icons/AntDesign";
import React, { FC, useState } from "react";
import { Control, Controller } from "react-hook-form";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from "./styles";
import { Color } from "../../constants";

export interface IFormDateSelectProps {
  name: string;
  control: Control<any>;
  label: string;
  style?: StyleProp<ViewStyle>;
}

const MINIMUM_DATE = new Date(1900, 0, 1);
const MAXIMUM_DATE = new Date(2100, 0, 1);

const FormDateSelect: FC<IFormDateSelectProps> = ({
  name,
  control,
  label,
  style,
}) => {
  const [isVisble, setIsVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <TouchableOpacity
        style={[styles.dropdownContainer, style]}
        onPress={() => setIsVisible(true)}
      >
        <View style={styles.content}>
          <View>
            <Text style={styles.labelText}>{label}</Text>
            <Text style={styles.valueText}>{date.toLocaleDateString()}</Text>
          </View>
          <Icon name="down" size={15} color={Color.black} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DateTimePickerModal
            isVisible={isVisble}
            mode="date"
            date={value}
            onConfirm={(date) => {
              onChange(date);
              setDate(date);
              setIsVisible(false);
            }}
            onCancel={() => setIsVisible(false)}
            minimumDate={MINIMUM_DATE}
            maximumDate={MAXIMUM_DATE}
          />
        )}
      />
    </>
  );
};

export default FormDateSelect;
