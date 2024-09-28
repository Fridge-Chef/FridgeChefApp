import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FWidth} from '../../../globalStyle';
import StorageItem from './StorageItem';
import {storageList, storageList2} from '../../utils/list';

type StorageListProps = {
  isClicked: number;
};

type ListType = {
  id: number;
  title: string;
  expiryDate: string;
  content: string;
};

const StorageList = ({isClicked}: StorageListProps) => {
  const [sList, setSList] = useState<ListType[]>([]);

  useEffect(() => {
    switch (isClicked) {
      case 1:
        setSList(storageList);
        break;
      case 2:
        setSList(storageList2);
        break;
    }
  }, [isClicked]);

  return (
    <View style={styles.container}>
      {sList.map(item => (
        <StorageItem key={item.id} item={item} />
      ))}
    </View>
  );
};

export default StorageList;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
  },
});
