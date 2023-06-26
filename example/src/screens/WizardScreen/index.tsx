import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Wizard, IWizardItem } from "sunnova-components";

import { Cart, Billing, Shipping, Payment } from "./WizardContent";
import { Color } from "../../constants/Color";
import { Routes, WizardNavProp } from "../../navigation/types";

export const DATA: IWizardItem[] = [
  {
    index: 0,
    component: <Cart />,
    title: "Cart",
    description: "Review and manage the items in your shopping cart.",
    help: "Review and manage the items in your shopping cart.",
  },
  {
    index: 1,
    component: <Billing />,
    title: "Billing",
    description:
      "Enter your payment information and billing details to proceed with the purchase.",
    help: "Enter your payment information and billing details to proceed with the purchase.",
  },
  {
    index: 2,
    component: <Shipping />,
    title: "Shipping",
    description:
      "Provide your shipping address and choose a preferred shipping method.",
    help: "Provide your shipping address and choose a preferred shipping method.",
  },
  {
    index: 3,
    component: <Payment />,
    title: "Payment",
    description:
      "Review the total cost of your order and select a payment method to complete your purchase.",
    help: "Review the total cost of your order and select a payment method to complete your purchase.",
  },
];

const WizardScreen: FC = () => {
  const navigation = useNavigation<WizardNavProp>();
  return (
    <Wizard
      data={DATA}
      onCompletion={() => navigation.navigate(Routes.Dashboard)}
      activeColor={Color.primary}
      inactiveColor={Color.lightGrey}
    />
  );
};

export default WizardScreen;
