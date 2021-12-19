import React, {FC, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {ProductModel} from '../../features/products';

interface ItemsProps<T> {
  children: ReactNode
}

export const ItemsList: FC<ItemsProps<ProductModel[]>> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
