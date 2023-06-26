import React, { FC } from "react";
import { FieldError } from "react-hook-form";
import { Text } from "react-native";

import styles from "./styles";

interface IProps {
  error?: FieldError;
}

const FormError: FC<IProps> = ({ error }) => {
  return (
    <>
      <Text style={styles.errorText}>{error?.message ?? ""}</Text>
    </>
  );
};

export default FormError;
