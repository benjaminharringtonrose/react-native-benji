/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native";
import { OrientationType } from "react-native-orientation-locker";
import { useRecoilValue } from "recoil";
import * as yup from "yup";

import LandscapeLogin from "./LandscapeLogin";
import PortraitLogin from "./PortraitLogin";
import styles from "./styles";
import { settingsState } from "../../atoms/settings";
import { useMockRequest } from "../../hooks/useMockRequest";
import { usePrevious } from "../../hooks/usePrevious";
import { LoginNavProp } from "../../navigation/types";

export interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup.object<ILoginForm>().shape({
  email: yup.string().required("email required").email("email is not valid"),
  password: yup.string().required("password required"),
});

const DEFAULT_VALUES: ILoginForm = {
  email: "",
  password: "",
};

const LoginScreen: FC = () => {
  const navigation = useNavigation<LoginNavProp>();
  const { loading, error, onRequest } = useMockRequest();
  const { orientation } = useRecoilValue(settingsState);

  const { control, handleSubmit, setFocus, formState } = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const isLandscape =
    orientation === OrientationType["LANDSCAPE-LEFT"] ||
    orientation === OrientationType["LANDSCAPE-RIGHT"];

  const prevLoading = usePrevious<boolean>(loading);
  useEffect(() => {
    const successfulRequest = prevLoading && !loading && !error;
    if (successfulRequest) {
      navigation.goBack();
    }
  }, [prevLoading, loading, error]);

  const onSubmit = (data: ILoginForm) => {
    console.log("data", JSON.stringify(data));
    onRequest();
  };

  if (isLandscape) {
    return (
      <SafeAreaView style={styles.root}>
        <LandscapeLogin
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          setFocus={setFocus}
          loading={loading}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      <PortraitLogin
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        setFocus={setFocus}
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
