import { ReactElement } from "react";

export interface IWizardItem {
  index: number;
  lottie?: any;
  component: JSX.Element;
  title?: string;
  description?: string;
  help?: string;
}

export interface IPicklistItem {
  id: number;
  data: any;
}

export interface IRadioButton {
  index: number;
  label: string;
}

export interface ITab {
  index: number;
  label: string;
  component: ReactElement;
}

export enum ERequirement {
  Length = "length",
  Lowercase = "lowercase",
  Uppercase = "uppercase",
  Numbers = "numbers",
  Symbols = "symbols",
}

export type TRequirements = Record<ERequirement, boolean | number>;

export type ValidRequirements = Record<
  | ERequirement.Lowercase
  | ERequirement.Uppercase
  | ERequirement.Numbers
  | ERequirement.Symbols,
  boolean
>;
