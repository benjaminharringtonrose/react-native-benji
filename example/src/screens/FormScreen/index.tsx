/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";
import React, { FC, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FormSection,
  FormMaskedInput,
  FormSwitch,
  Button,
  FormDateSelect,
  FormInput,
  FormPicklist,
  FormMultiPicklist,
  FormMultiLineInput,
  FormRadioButtons,
} from "sunnova-components";
import * as yup from "yup";

import styles from "./styles";
import { useList } from "../../atoms/list";
import { ToastType, useToast } from "../../atoms/toast";
import { Color } from "../../constants/Color";
import {
  multiSelectData,
  radioButtonData,
  usStates,
} from "../../constants/Data";
import { useMockRequest } from "../../hooks/useMockRequest";
import { usePrevious } from "../../hooks/usePrevious";
import { FormNavProp } from "../../navigation/types";

const TITLE = "SECTION TITLE";
const DESCRIPTION =
  "Some user instructions may go here and it can wrap multiple times. Here's some more text to fill it up.";
const CURRENCY_OPTIONS = {
  decimalSeparator: ".",
  groupSeparator: ",",
  precision: 2,
  prefix: "$",
};
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export interface IListForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  switch1: boolean;
  haveYouEver: string[];
  message: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip?: string;
  dateStart: Date;
  dateEnd: Date;
  amount: string;
}

const schema = yup.object<IListForm>().shape({
  firstName: yup.string().required("first name required"),
  lastName: yup.string().required("last name required"),
  email: yup.string().required("email required").email("email is not valid"),
  phoneNumber: yup
    .string()
    .required("phone number required")
    .matches(phoneRegExp, "phone number is not valid"),
  switch1: yup.boolean(),
  address1: yup.string().required("address 1 required"),
  address2: yup.string(),
  city: yup.string().required("city required"),
  state: yup.string().required("state required"),
  zip: yup.string().required("zip required"),
  dateStart: yup.string(),
  dateEnd: yup.string(),
  amount: yup.string(),
});

const DEFAULT_VALUES: IListForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  switch1: false,
  haveYouEver: [],
  message: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: undefined,
  dateStart: new Date(),
  dateEnd: new Date(),
  amount: "0",
};

const FormScreen: FC = () => {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
  const navigation = useNavigation<FormNavProp>();
  const { loading, error, onRequest } = useMockRequest();
  const { toggleToast } = useToast();
  const { updateList } = useList();

  const { control, handleSubmit, setFocus, formState } = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  console.log(JSON.stringify(errors["phoneNumber"]));

  useEffect(() => {
    if (!isEmpty(errors)) {
      scrollRef.current?.scrollToPosition(0, 0, true);
      toggleToast({
        type: ToastType.Error,
        message:
          "It appears you have an error. Please review your information and try again.",
        ms: 5000,
      });
    }
  }, [errors]);

  const prevLoading = usePrevious<boolean>(loading);
  useEffect(() => {
    const successfulRequest = prevLoading && !loading && !error;
    if (successfulRequest) {
      navigation.goBack();
    }
  }, [prevLoading, loading, error]);

  const onSubmit = (data: IListForm) => {
    console.log("data", JSON.stringify(data));
    onRequest(() => {
      updateList(data);
    });
  };

  return (
    <>
      <KeyboardAwareScrollView
        ref={scrollRef}
        enableResetScrollToCoords={false}
      >
        <FormSection title={TITLE} description={DESCRIPTION}>
          <FormInput
            name="firstName"
            label="First Name"
            control={control}
            error={errors.firstName}
            returnKeyType="next"
            onSubmitEditing={() => setFocus("lastName")}
          />
          <FormInput
            name="lastName"
            label="Last Name"
            control={control}
            error={errors.lastName}
            returnKeyType="next"
            onSubmitEditing={() => setFocus("email")}
            style={styles.marginTop}
          />
          <FormInput
            name="email"
            label="Email"
            control={control}
            error={errors.email}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => setFocus("phoneNumber")}
            autoCapitalize="none"
            style={styles.marginTop}
          />
          <FormMaskedInput
            name="phoneNumber"
            label="Phone Number"
            control={control}
            error={errors.phoneNumber}
            mask="(999)-999-9999"
            keyboardType="phone-pad"
            returnKeyType="done"
            style={styles.marginTop}
            useOutput
          />
        </FormSection>
        <FormSection title="RADIO BUTTONS" description={DESCRIPTION}>
          <FormRadioButtons
            name="radioButton"
            control={control}
            data={radioButtonData}
          />
        </FormSection>
        <FormSection title="YES OR NO" description={DESCRIPTION}>
          <FormSwitch name="switch1" label="Enable FOO" control={control} />
        </FormSection>
        <FormSection title="SELECT ANY" description={DESCRIPTION}>
          <FormMultiPicklist
            name="haveYouEver"
            label="Have you ever..."
            modalTitle="Select Any"
            control={control}
            items={multiSelectData}
            style={styles.marginTop}
          />
        </FormSection>
        <FormSection title={TITLE} description={DESCRIPTION}>
          <FormMultiLineInput
            name="message"
            label="Message"
            control={control}
          />
        </FormSection>
        <FormSection title="CONTACT INFO" description={DESCRIPTION}>
          <FormInput
            name="address1"
            label="Address 1"
            control={control}
            error={errors.address1}
            returnKeyType="next"
            onSubmitEditing={() => setFocus("address2")}
            autoCapitalize="words"
          />
          <FormInput
            name="address2"
            label="Address 2"
            control={control}
            error={errors.address2}
            returnKeyType="next"
            onSubmitEditing={() => setFocus("city")}
            autoCapitalize="words"
            style={styles.marginTop}
          />
          <FormInput
            name="city"
            label="City"
            control={control}
            error={errors.city}
            returnKeyType="done"
            style={styles.marginTop}
          />
          <FormPicklist
            name="state"
            label="State"
            modalTitle="Select State"
            control={control}
            items={usStates}
            error={errors.state}
            onSubmitEditing={() => setFocus("zip")}
            style={styles.marginTop}
          />
          <FormMaskedInput
            name="zip"
            label="Zip"
            control={control}
            error={errors.zip}
            mask="99999-9999"
            keyboardType="numeric"
            returnKeyType="done"
            style={styles.marginTop}
          />
        </FormSection>
        <FormSection title="ETA" description={DESCRIPTION}>
          <FormDateSelect
            name="dateStart"
            label="Start Date"
            control={control}
          />
          <FormDateSelect
            name="dateEnd"
            label="End Date"
            control={control}
            style={styles.marginTop}
          />
        </FormSection>
        <FormSection title="AMOUNT" description={DESCRIPTION}>
          <FormMaskedInput
            name="amount"
            label="Price"
            control={control}
            error={errors.amount}
            type="currency"
            options={CURRENCY_OPTIONS}
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={handleSubmit(onSubmit)}
            style={styles.marginTop}
          />
        </FormSection>
        <Button
          label="SUBMIT"
          labelColor={Color.white}
          backgroundColor={Color.primary}
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          style={styles.button}
        />
      </KeyboardAwareScrollView>
    </>
  );
};

export default FormScreen;
