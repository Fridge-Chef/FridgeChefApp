import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';

type StorageSubItemProps = {
  item: {
    id: number;
    title: string;
    content: string;
  };
};

const StorageSubItem = ({item}: StorageSubItemProps) => {
  return (
    <View style={styles.container}>
      <FText fStyle="B_16" color={colors.text} text={item.title} />
      <View style={styles.contentContainer}>
        <FText
          flexShrink={1}
          lineH={FWidth * 20}
          fStyle="R_14"
          color={colors.b600}
          text={item.content}
        />
      </View>
    </View>
  );
};

export default StorageSubItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: FWidth * 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: FWidth * 16,
  },

  contentContainer: {
    marginTop: FWidth * 8,
  },
});
