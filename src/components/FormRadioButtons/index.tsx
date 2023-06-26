import React, { FC, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { View, Text } from "react-native";

import RadioButton from "../RadioButton";
import { IRadioButton } from "../types";

export interface IFormRadioButtonsProps {
  name: string;
  control: Control<any>;
  data: IRadioButton[];
}

const FormRadioButtons: FC<IFormRadioButtonsProps> = ({
  name,
  control,
  data,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <>
            {data.map((radio) => {
              const isSelected = radio.index === selectedIndex;
              return (
                <View
                  key={radio.index}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <RadioButton
                    isSelected={isSelected}
                    onPress={() => {
                      setSelectedIndex(radio.index);
                      onChange(radio.label);
                    }}
                    style={{ margin: 2 }}
                  />
                  <Text style={{ paddingLeft: 10 }}>{radio.label}</Text>
                </View>
              );
            })}
          </>
        );
      }}
    />
  );
};

export default FormRadioButtons;
