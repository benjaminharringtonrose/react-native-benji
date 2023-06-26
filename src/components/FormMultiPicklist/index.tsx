import Icon from "@expo/vector-icons/AntDesign";
import React, { FC, useState } from "react";
import {
  Control,
  Controller,
  FieldError,
  useFieldArray,
} from "react-hook-form";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";

import styles from "./styles";
import { Color } from "../../constants";
import BottomFlatListModal from "../BottomFlatListModal";
import FormError from "../FormError";
import { IPicklistItem } from "../types";

export interface IFormMultiPicklistProps {
  name: string;
  control: Control<any>;
  label: string;
  modalTitle: string;
  items: IPicklistItem[];
  error?: FieldError;
  style?: StyleProp<ViewStyle>;
}

const FormMultiPicklist: FC<IFormMultiPicklistProps> = ({
  name,
  control,
  label,
  modalTitle,
  items,
  error,
  style,
}) => {
  const { update, remove } = useFieldArray({ name, control });
  const [isVisble, setIsVisible] = useState(false);
  const [selection, setSelection] = useState<IPicklistItem[]>([]);

  return (
    <>
      <TouchableOpacity
        style={[styles.dropdownContainer, style]}
        onPress={() => setIsVisible(true)}
      >
        <View style={styles.content}>
          <View style={styles.flex1}>
            <Text style={styles.labelText}>{label}</Text>
            <Text style={styles.valueText} numberOfLines={1}>
              {`${selection.length} items selected`}
            </Text>
          </View>
          <Icon name="down" size={15} color={Color.black} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <FormError error={error} />
      <Controller
        name={name}
        control={control}
        render={() => (
          <BottomFlatListModal
            modalTitle={modalTitle}
            isVisible={isVisble}
            data={items}
            keyExtractor={(item) => item.id.toString()}
            onClose={() => setIsVisible(false)}
            contentContainerStyle={styles.bottomPadding}
            renderItem={({ item }: ListRenderItemInfo<IPicklistItem>) => {
              const isSelected = !!selection.find((i) => i.id === item.id);
              return (
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => {
                    if (isSelected) {
                      remove(item.id);
                      setSelection([
                        ...selection.filter((i) => i.id !== item.id),
                      ]);
                    } else {
                      setSelection((selection) => [...selection, item]);
                      update(selection.length, item.data);
                    }
                  }}
                >
                  <View style={styles.itemRow}>
                    <Text style={styles.itemText}>{item.data}</Text>
                    {isSelected && (
                      <Icon
                        name="checkcircle"
                        size={20}
                        color={Color.primary}
                        style={{ marginLeft: 10 }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        )}
      />
    </>
  );
};

const ItemSeparatorComponent = () => (
  <View
    style={{
      height: StyleSheet.hairlineWidth,
      backgroundColor: Color.grey,
    }}
  />
);

export default FormMultiPicklist;
