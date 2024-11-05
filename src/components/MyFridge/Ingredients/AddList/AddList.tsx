import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FWidth} from '../../../../../globalStyle';
import ItemComponent from './ItemComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetIngredients} from '../../../../api/ingredientsQuery';
import Loading from '../../../elements/Loading';

export type ListData = {
  expirationDate?: string;
  ingredientCategory?: string;
  ingredientName: string;
  storage: 'REFRIGERATION' | 'TEMPERATURE';
};

type AddListProps = {
  onClicked?: number;
};

const AddList = ({onClicked}: AddListProps) => {
  const [dataList, setDataList] = useState<ListData[]>();
  const {data: listData, isLoading} = useGetIngredients();
  useEffect(() => {
    const fetchData = async () => {
      if (isLoading) return; // 로딩 중일 때는 아무 작업도 하지 않음

      const token = await AsyncStorage.getItem('token');
      let data: ListData[] = [];

      if (token === null) {
        const storedData = await AsyncStorage.getItem('ingredients');
        data = storedData ? JSON.parse(storedData) : [];
      } else if (listData) {
        data = listData; // listData를 바로 사용
      }

      if (onClicked === 1) {
        setDataList(data.filter(item => item.storage === 'REFRIGERATION'));
      } else if (onClicked === 2) {
        setDataList(data.filter(item => item.storage === 'TEMPERATURE'));
      } else {
        setDataList(data); // 모든 데이터를 보여줌
      }
    };

    fetchData();
  }, [onClicked, listData, isLoading]);
  console.log(dataList);
  if (isLoading) {
    return <Loading loadingTitle="로딩중" />;
  }
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
