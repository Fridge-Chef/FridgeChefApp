import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FHeight, FWidth} from '../../../../globalStyle';
import SubTitleComponent from '../SubTitleComponent';
import ItemComponent from './ItemComponent';

type ListData = {
  title: string;
  items: {
    name: string;
    expiry_date: string;
  }[];
};

const AddList = () => {
  const data = require('../../../utils/listData.json');

  return (
    <View style={styles.container}>
      {data.map((item: ListData, index: number) => (
        <View key={index} style={{marginTop: index === 0 ? 0 : FHeight * 12}}>
          <SubTitleComponent title={item.title} color={colors.b400} />
          <View>
            {item.items.map((itemList, index) => (
              <ItemComponent itemList={itemList} key={index} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: FWidth * 22,
    marginTop: FWidth * 40,
    marginBottom: FWidth * 132, // 기본 100에서 32 추가
  },
});
