import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Host } from "react-native-portalize";
import { RecoilRoot } from "recoil";

import { Toast } from "./src/components";
import { OrientationListener } from "./src/listeners/OrientationListener";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <RecoilRoot>
      <Host>
        <StatusBar style="auto" />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Host>
      <Toast />
      <OrientationListener />
    </RecoilRoot>
  );
}
