import React, { FC, memo } from "react";
import { View, Text } from "react-native";

import { IListItem } from "../../atoms/list";
import { Color } from "../../constants/Color";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ListItem: FC<IListItem> = ({
  firstName,
  lastName,
  dateStart,
  dateEnd,
  switch1,
  amount,
  address1,
}) => {
  return (
    <View style={{ padding: 10, backgroundColor: Color.white }}>
      <Text style={{ fontSize: 17 }}>{`${firstName} ${lastName}`}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
        }}
      >
        <Text style={{ fontSize: 15, color: Color.darkGrey }}>Address</Text>
        <Text>{address1}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, color: Color.darkGrey }}>
          FOO enabled?
        </Text>
        <Text>{switch1 ? "Yes" : "No"}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, color: Color.darkGrey }}>Start Date</Text>
        <Text>{new Date(dateStart).toLocaleDateString()}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 15, color: Color.darkGrey }}>End Date</Text>
        <Text>{new Date(dateEnd).toLocaleDateString()}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 15, color: Color.darkGrey }}>Amount</Text>
        <Text>{formatter.format(Number(amount) / 100)}</Text>
      </View>
    </View>
  );
};

export default memo(ListItem);
