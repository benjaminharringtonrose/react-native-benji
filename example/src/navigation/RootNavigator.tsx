import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { RootStackParams, Routes } from "./types";
import { BackButton, AddButton } from "../components";
import DashboardScreen from "../screens/DashboardScreen";
import FormScreen from "../screens/FormScreen";
import ListScreen from "../screens/ListScreen";
import LoginScreen from "../screens/LoginScreen";
import TabExampleScreen from "../screens/TabExampleScreen";
import WizardScreen from "../screens/WizardScreen";

const RootStack = createNativeStackNavigator<RootStackParams>();

export const RootNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={Routes.Dashboard}
      component={DashboardScreen}
      options={{ headerTitle: "Dashboard" }}
    />
    <RootStack.Screen
      name={Routes.Form}
      component={FormScreen}
      options={({ navigation }) => ({
        headerTitle: "Add Item",
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      })}
    />
    <RootStack.Screen
      name={Routes.List}
      component={ListScreen}
      options={({ navigation }) => ({
        headerTitle: "Items",
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        headerRight: () => (
          <AddButton onPress={() => navigation.navigate(Routes.Form)} />
        ),
      })}
    />
    <RootStack.Screen
      name={Routes.Login}
      component={LoginScreen}
      options={{ headerTitle: "Login" }}
    />
    <RootStack.Screen
      name={Routes.Wizard}
      component={WizardScreen}
      options={({ navigation }) => ({
        headerTitle: "Checkout",
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      })}
    />
    <RootStack.Screen
      name={Routes.TabExample}
      component={TabExampleScreen}
      options={({ navigation }) => ({
        headerTitle: "Animated Tab Example",
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      })}
    />
  </RootStack.Navigator>
);
