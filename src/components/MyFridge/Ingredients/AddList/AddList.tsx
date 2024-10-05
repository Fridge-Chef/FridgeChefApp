import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FHeight, FWidth} from '../../../../../globalStyle';
import SubTitleComponent from '../SubTitleComponent';
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
    <View style={styles.container1}>
      <View style={styles.listContainer}>
        {dataList.map((item: ListData, index: number) => (
          <View key={index} style={{}}>
            {/* <SubTitleComponent title={item.title} color={colors.b400} /> */}
            <View>
              {item.items.map((itemList, index) => (
                <ItemComponent itemList={itemList} key={index} />
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  listContainer: {
    // marginTop: FWidth * 40,
    marginTop: FWidth * 12,
    paddingHorizontal: FWidth * 22,
    // marginBottom: FWidth * 132, // 기본 100에서 32 추가
    marginBottom: FWidth * 78, // 기본 60에서 18 추가
  },
});
