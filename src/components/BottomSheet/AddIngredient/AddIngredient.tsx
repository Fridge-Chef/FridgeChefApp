import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import InputAndSearch from '../InputAndSearch';
import {useAddModalInputText, useBottomSheetRef} from '../../../store/store';
import ItemList from '../ItemList';
import BottomButton from '../BottomButton';
import TopMenu from './TopMenu';
import {useGetMyFridgeList} from '../../../api/recipeQuery';
import Loading from '../../elements/Loading';
import {baseUrl} from '../../../api/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetIngredients} from '../../../api/ingredientsQuery';

export type ListData = {
  ingredientName: string;
  storage: 'REFRIGERATION' | 'TEMPERATURE';
};

const AddIngredient = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const [isClicked, setIsClicked] = useState(1);
  const [itemList, setItemList] = useState<ListData[]>([]);
  const [itemList2, setItemList2] = useState<ListData[]>([]);
  const {data, isLoading} = useGetMyFridgeList();
  const {refetch} = useGetIngredients();
  const handleSubmit = async () => {
    if (itemList.length <= 0 && itemList2.length <= 0) return;
    console.log('리스트 아이템', itemList);
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await baseUrl.post('api/fridges/ingredients', itemList, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response2 = await baseUrl.post(
        'api/fridges/ingredients',
        itemList2,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 201 && response2.status === 201) {
        setItemList([]);
        setItemList2([]);
        bottomSheetRef.current?.close();
        refetch();
      }
      console.log('리스트1', response.data);
      console.log('리스트2', response2);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const handleClose = () => {
    setIsClicked(1);
    setItemList([]);
    setItemList2([]);
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    const getData = async () => {};
    getData();
  }, []);

  if (isLoading) return <Loading loadingTitle="로딩중" />;

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setAddTitle('');
        Keyboard.dismiss();
      }}>
      <View style={styles.contentContainer}>
        <TopMenu
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          onPress={handleClose}
        />
        <View style={styles.subTitleContainer}>
          {/* <SubTitleBS title="재료명" /> */}
          <InputAndSearch
            isClicked={isClicked}
            itemList={data?.ingredientNames}
            setItemList={isClicked === 1 ? setItemList : setItemList2}
          />
        </View>
        <ItemList
          itemList={isClicked === 1 ? itemList : itemList2}
          setItemList={isClicked === 1 ? setItemList : setItemList2}
          title="등록된 재료들"
        />
      </View>
      <BottomButton
        title="재료 등록하기"
        buttonColor={
          itemList.length > 0 || itemList2.length > 0
            ? colors.text
            : colors.disabled2
        }
        onPress={handleSubmit}
      />
    </Pressable>
  );
};

export default AddIngredient;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 16,
    flex: 1,
    justifyContent: 'space-between',
  },

  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 22,
  },

  subTitleContainer: {
    marginTop: FWidth * 32,
  },
});
