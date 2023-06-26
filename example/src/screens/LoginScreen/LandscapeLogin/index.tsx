import LottieView from "lottie-react-native";
import React, { FC } from "react";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormSetFocus,
} from "react-hook-form";
import { ScrollView, View } from "react-native";
import {
  Button,
  FormInput,
  FormPasswordInput,
  FormSection,
} from "sunnova-components";

import { ILoginForm } from "..";
import { Color } from "../../../constants";
import styles from "../styles";

const TITLE = "Welcome Back!";

const DESCRIPTION =
  "Some user instructions may go here and it can wrap multiple times. Here's some more text to fill it up.";

interface IProps {
  control: Control<ILoginForm>;
  errors: FieldErrors<ILoginForm>;
  handleSubmit: UseFormHandleSubmit<ILoginForm, undefined>;
  onSubmit: (data: ILoginForm) => void;
  setFocus: UseFormSetFocus<ILoginForm>;
  loading: boolean;
}

const LandscapeLogin: FC<IProps> = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
  setFocus,
  loading,
}) => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Color.white }}
      showsVerticalScrollIndicator={false}
    >
      <LottieView
        autoPlay
        source={require("../../../../assets/lottie/hello.json")}
        style={{
          alignSelf: "center",
          width: 200,
          height: 200,
        }}
      />
      <FormSection title={TITLE} description={DESCRIPTION}>
        <View style={{ flexDirection: "row" }}>
          <FormInput
            name="email"
            label="Email"
            control={control}
            error={errors.email}
            returnKeyType="next"
            onSubmitEditing={() => setFocus("password")}
            style={[styles.marginTop, { marginRight: 10 }]}
          />
          <FormPasswordInput
            name="password"
            label="Password"
            control={control}
            error={errors.password}
            returnKeyType="done"
            onSubmitEditing={handleSubmit(onSubmit)}
            style={styles.marginTop}
          />
        </View>
      </FormSection>
      <View style={{ alignItems: "flex-end" }}>
        <Button
          label="SUBMIT"
          onPress={handleSubmit(onSubmit)}
          labelColor={Color.white}
          backgroundColor={Color.primary}
          loading={loading}
          style={{
            marginHorizontal: 10,
            marginBottom: 30,
            paddingHorizontal: 40,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default LandscapeLogin;
