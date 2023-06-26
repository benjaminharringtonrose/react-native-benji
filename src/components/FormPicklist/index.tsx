import Icon from "@expo/vector-icons/AntDesign";
import React, { FC, useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";

import styles from "./styles";
import { Color } from "../../constants";
import BottomModal from "../BottomModal";
import FormError from "../FormError";
import { IPicklistItem } from "../types";

export interface IFormPicklistProps {
  name: string;
  control: Control<any>;
  label: string;
  modalTitle: string;
  items?: IPicklistItem[];
  error?: FieldError;
  style?: StyleProp<ViewStyle>;
  onSubmitEditing?: () => void;
}

const FormPicklist: FC<IFormPicklistProps> = ({
  name,
  control,
  label,
  modalTitle,
  items,
  error,
  style,
  onSubmitEditing,
}) => {
  const [isVisble, setIsVisible] = useState(false);
  const [selection, setSelection] = useState<IPicklistItem | undefined>(
    undefined
  );

  return (
    <>
      <TouchableOpacity
        style={[styles.dropdownContainer, style]}
        onPress={() => setIsVisible(true)}
      >
        <View style={styles.content}>
          <View style={styles.flex1}>
            <Text style={styles.labelText}>{label}</Text>
            <Text style={styles.valueText}>{selection?.data}</Text>
          </View>
          <Icon name="down" size={15} color={Color.black} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <FormError error={error} />
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <BottomModal
            modalTitle={modalTitle}
            isVisible={isVisble}
            onClose={() => setIsVisible(false)}
          >
            <FlatList
              data={items}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }: ListRenderItemInfo<IPicklistItem>) => {
                const isSelected = selection?.id === item.id;
                return (
                  <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => {
                      setSelection(item);
                      setIsVisible(false);
                      onChange(item.data);
                      onSubmitEditing?.();
                    }}
                  >
                    <View style={styles.itemRow}>
                      <Text style={styles.itemText}>{item.data}</Text>
                      {isSelected && (
                        <Icon
                          name="checkcircle"
                          size={20}
                          color={Color.primary}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              }}
              ItemSeparatorComponent={ItemSeparatorComponent}
            />
          </BottomModal>
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

export default FormPicklist;
