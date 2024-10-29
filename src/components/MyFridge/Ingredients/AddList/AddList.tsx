import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FWidth} from '../../../../../globalStyle';
import ItemComponent from './ItemComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ListData = {
  ingredientName: string;
  storage: 'REFRIGERATION' | 'TEMPERATURE';
};

type AddListProps = {
  onClicked?: number;
};

const AddList = ({onClicked}: AddListProps) => {
  const [dataList, setDataList] = useState<ListData[]>();

  const handleData = async (): Promise<ListData[]> => {
    if ((await AsyncStorage.getItem('token')) === null) {
      const data = await AsyncStorage.getItem('ingredients');
      return data ? JSON.parse(data) : [];
    } else {
      const data: ListData[] = [
        {ingredientName: '계란', storage: 'REFRIGERATION'},
        {ingredientName: '간장', storage: 'TEMPERATURE'},
      ];
      return data;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleData();
      if (onClicked === 1) {
        // 냉장 재료 필터링
        setDataList(data.filter(item => item.storage === 'REFRIGERATION'));
      } else if (onClicked === 2) {
        // 온실 재료 필터링
        setDataList(data.filter(item => item.storage === 'TEMPERATURE'));
      }
    };

    fetchData();
  }, [onClicked]);
  console.log(dataList);
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {dataList?.map((item: ListData, index: number) => (
          <ItemComponent item={item} key={index} />
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
