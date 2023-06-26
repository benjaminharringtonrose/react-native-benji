import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { FC, useState } from "react";
import { View } from "react-native";
import {
  Button,
  AsyncStepModal,
  IWizardItem,
} from "react-native-rhf-components";

import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import styles from "./styles";
import { ToastType, useToast } from "../../atoms/toast";
import { Color } from "../../constants";
import { useMockRequest } from "../../hooks/useMockRequest";
import { DashboardNavProp, Routes } from "../../navigation/types";

export const DATA: IWizardItem[] = [
  {
    index: 0,
    component: <StepOne />,
    lottie: (
      <LottieView
        autoPlay
        source={require("../../../assets/lottie/download_from_cloud.json")}
        style={{
          width: 100,
          height: 100,
        }}
      />
    ),

    title: "Step 1",
  },
  {
    index: 1,
    component: <StepTwo />,
    lottie: (
      <LottieView
        autoPlay
        source={require("../../../assets/lottie/organize.json")}
        style={{
          width: 100,
          height: 100,
        }}
      />
    ),
    title: "Step 2",
  },
  {
    index: 2,
    component: <StepThree />,
    lottie: (
      <LottieView
        autoPlay
        source={require("../../../assets/lottie/rocket.json")}
        style={{
          width: 100,
          height: 100,
        }}
      />
    ),
    title: "Step 3",
  },
];

const DashboardScreen: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { loading: loading1, onRequest: onRequest1 } = useMockRequest(3000);
  const { loading: loading2, onRequest: onRequest2 } = useMockRequest(3000);
  const { loading: loading3, onRequest: onRequest3 } = useMockRequest(3000);
  const { toggleToast } = useToast();

  const navigation = useNavigation<DashboardNavProp>();

  return (
    <View style={styles.root}>
      <Button
        label="List"
        onPress={() => navigation.navigate(Routes.List)}
        borderColor={Color.medDarkGrey}
        style={styles.buttonMargin}
      />
      <Button
        label="Wizard"
        onPress={() => navigation.navigate(Routes.Wizard)}
        borderColor={Color.medDarkGrey}
        style={styles.buttonMargin}
      />
      <Button
        label="Async Stepper Modal"
        onPress={async () => {
          setIsVisible(true);
          onRequest1(() => {
            onRequest2(() => {
              onRequest3();
            });
          });
        }}
        borderColor={Color.medDarkGrey}
        style={styles.buttonMargin}
      />
      <Button
        label="Login"
        onPress={() => navigation.navigate(Routes.Login)}
        borderColor={Color.medDarkGrey}
        style={styles.buttonMargin}
      />
      <Button
        label="Toast"
        onPress={() => {
          toggleToast({
            type: ToastType.Success,
            message: "Success!",
          });
        }}
        borderColor={Color.medDarkGrey}
        style={styles.buttonMargin}
      />
      <Button
        label="Animated Tab Example"
        onPress={() => navigation.navigate(Routes.TabExample)}
        borderColor={Color.medDarkGrey}
        style={styles.buttonMargin}
      />
      <AsyncStepModal
        isVisible={isVisible}
        loading={[loading1, loading2, loading3]}
        data={DATA}
        ProcessCompletedComponent={
          <LottieView
            autoPlay
            loop={false}
            source={require("../../../assets/lottie/completed.json")}
            style={{
              width: 100,
              height: 100,
            }}
          />
        }
        onClose={() => setIsVisible(false)}
      />
    </View>
  );
};

export default DashboardScreen;
