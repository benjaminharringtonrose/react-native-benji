import { useEffect, useState } from "react";

import { ERequirement, TRequirements, ValidRequirements } from "../types";

const regexUppercase = /[A-Z]/;
const regexLowercase = /[a-z]/;
const regexSymbol = /[!@#$%^&*(),.?":{}|<>]/;
const regexNumber = /\d/;

const defaultValidRequrements: ValidRequirements = {
  [ERequirement.Lowercase]: false,
  [ERequirement.Uppercase]: false,
  [ERequirement.Numbers]: false,
  [ERequirement.Symbols]: false,
};

export const usePasswordStrengthIndicator = ({
  password,
  requirements,
}: {
  password: string;
  requirements: TRequirements;
}) => {
  const [validRequirements, setValidRequirements] = useState<
    Record<string, boolean>
  >(defaultValidRequrements);

  const charactersRemaining = max(
    0,
    Number(requirements.length) - password.length
  );

  const charactersRemainingLabel = `${charactersRemaining} characters remaining`;

  const requirementsArr = Object.entries(requirements).map(([prop, value]) => ({
    [prop]: value,
  }));

  const validatePassword = (password: string, requirements: TRequirements) => {
    const validRequirements: ValidRequirements = {
      [ERequirement.Lowercase]: false,
      [ERequirement.Uppercase]: false,
      [ERequirement.Numbers]: false,
      [ERequirement.Symbols]: false,
    };
    if (requirements.lowercase) {
      validRequirements.lowercase = regexLowercase.test(password);
    }
    if (requirements.uppercase) {
      validRequirements.uppercase = regexUppercase.test(password);
    }
    if (requirements.numbers) {
      validRequirements.numbers = regexNumber.test(password);
    }
    if (requirements.symbols) {
      validRequirements.symbols = regexSymbol.test(password);
    }
    return validRequirements;
  };

  useEffect(() => {
    setValidRequirements(validatePassword(password, requirements));
  }, [password]);

  return {
    validRequirements,
    charactersRemainingLabel,
    requirementsArr,
    validatePassword,
  };
};

const max = (a: number, b: number) => {
  return a > b ? a : b;
};
