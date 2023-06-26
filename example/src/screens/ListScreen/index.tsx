import React, { FC, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from "react-native";

import styles from "./styles";
import { IListItem, useList } from "../../atoms/list";
import { ListItem } from "../../components";
import { Color } from "../../constants/Color";
import { useMockRequest } from "../../hooks/useMockRequest";

const ListScreen: FC = () => {
  const { list } = useList();
  const { onRequest, loading, error } = useMockRequest();

  const renderItem = useCallback(({ item }: ListRenderItemInfo<IListItem>) => {
    return (
      <ListItem
        firstName={item.firstName}
        lastName={item.lastName}
        dateStart={item.dateStart}
        dateEnd={item.dateEnd}
        address1={item.address1}
        amount={item.amount}
        switch1={item.switch1}
      />
    );
  }, []);

  if (!loading && !error && list.length === 0) {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyListText}>
          No items in the list to display
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <FlatList
        data={list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        onRefresh={() => onRequest(() => {})}
        refreshing={loading}
      />
    </View>
  );
};

const ItemSeparatorComponent = () => (
  <View
    style={{
      height: StyleSheet.hairlineWidth,
      backgroundColor: Color.grey,
    }}
  />
);

export default ListScreen;
