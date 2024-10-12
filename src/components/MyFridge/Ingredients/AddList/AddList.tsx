import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FWidth} from '../../../../../globalStyle';
import ItemComponent from './ItemComponent';

type ListData = {
  title: string;
  items: {
    name: string;
    expiry_date: string;
  }[];
};

type AddListProps = {
  onClicked?: number;
};

const AddList = ({onClicked}: AddListProps) => {
  const data = require('../../../../utils/listData.json');
  const data1 = require('../../../../utils/listData2.json');
  const [dataList, setDataList] = useState<ListData[]>(data);
  useEffect(() => {
    switch (onClicked) {
      case 1:
        setDataList(data);
        break;
      case 2:
        setDataList(data1);
    }
  }, [onClicked]);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {dataList.map((item: ListData, index: number) => (
          <View key={index}>
            {item.items.map((itemList, index) => (
              <ItemComponent itemList={itemList} key={index} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 4,
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: FWidth * 22,
    marginBottom: FWidth * 78, // 기본 60에서 18 추가
  },
});
