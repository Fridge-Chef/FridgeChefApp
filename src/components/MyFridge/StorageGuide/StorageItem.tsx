import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

type StorageItemProps = {
  item: {
    id: number;
    title: string;
    expiryDate: string;
    content: string;
  };
};

const StorageItem = ({item}: StorageItemProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_16" color={colors.text} text={item.title} />
      <View style={styles.expiryDateContainer}>
        <FText
          flexShrink={1}
          fStyle="B_14"
          lineH={FWidth * 20}
          color={colors.secondary[1]}
          text={item.expiryDate}
        />
      </View>
      <View style={styles.contentContainer}>
        <FText
          flexShrink={1}
          fStyle="R_14"
          lineH={FWidth * 20}
          color={colors.b500}
          text={item.content}
        />
      </View>
    </View>
  );
};

export default StorageItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: FWidth * 12,
    padding: FWidth * 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.border,
  },

  expiryDateContainer: {
    marginTop: FWidth * 2,
  },

  contentContainer: {
    marginTop: FWidth * 8,
  },
});
