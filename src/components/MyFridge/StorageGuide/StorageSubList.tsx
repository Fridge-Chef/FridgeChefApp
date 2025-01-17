import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FWidth} from '../../../../globalStyle';
import {storageSubList} from '../../../utils/list';
import StorageSubItem from './StorageSubItem';

const StorageSubList = () => {
  return (
    <View style={styles.container}>
      {storageSubList.map(item => (
        <StorageSubItem key={item.id} item={item} />
      ))}
    </View>
  );
};

export default StorageSubList;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    marginBottom: FWidth * 68,
  },
});
