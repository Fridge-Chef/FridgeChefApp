import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import {useGetIngredients} from '../../../../api/ingredientsQuery';
import {useGetUser} from '../../../../api/userQuery';
import {useAddCheck} from '../../../../store/store';
import {ListData} from '../../../../type/types';
import Loading from '../../../elements/Loading';
import ItemComponent from './ItemComponent';

type AddListProps = {
  dataList: ListData[] | undefined;
  setDataList: (ingredientList: ListData[]) => void;
  onClicked?: number;
};

const AddList = ({dataList, setDataList, onClicked}: AddListProps) => {
  const {data: listData, isLoading, refetch} = useGetIngredients();
  const {data} = useGetUser();
  const {check} = useAddCheck();
  const fetchData = async () => {
    if (isLoading) return;
    const token = await AsyncStorage.getItem('token');
    const storedData = await AsyncStorage.getItem('ingredients');
    let data: ListData[] = [];
    if (token === null) {
      data = storedData ? JSON.parse(storedData) : [];
    } else if (listData) {
      data = listData;
    }
    setDataList(data);
  };

  useEffect(() => {
    fetchData();
    refetch();
  }, [onClicked, listData, isLoading, check, data]);

  if (isLoading) {
    return <Loading loadingTitle="로딩중" backColor={colors.white} />;
  }

  const filteredDataList = dataList?.filter(item => {
    if (onClicked === 1) return item.storage === 'REFRIGERATION';
    if (onClicked === 2) return item.storage === 'TEMPERATURE';
    return true;
  });

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {filteredDataList?.map((item: ListData, index: number) => (
          <ItemComponent item={item} key={index} fetchData={fetchData} />
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
    marginBottom: FWidth * 78,
  },
});
