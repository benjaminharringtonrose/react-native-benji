import { StackNavigationProp } from "@react-navigation/stack";

export enum Routes {
  Dashboard = "Dashboard",
  Form = "Form",
  List = "List",
  Login = "Login",
  Wizard = "Wizard",
  TabExample = "TabExample",
}

export type RootStackParams = {
  [Routes.Dashboard]: undefined;
  [Routes.Form]: undefined;
  [Routes.List]: undefined;
  [Routes.Login]: undefined;
  [Routes.Wizard]: undefined;
  [Routes.TabExample]: undefined;
};

export type DashboardNavProp = StackNavigationProp<
  RootStackParams,
  Routes.Dashboard
>;

export type FormNavProp = StackNavigationProp<RootStackParams, Routes.Form>;

export type WizardNavProp = StackNavigationProp<RootStackParams, Routes.Wizard>;

export type LoginNavProp = StackNavigationProp<RootStackParams, Routes.Login>;
