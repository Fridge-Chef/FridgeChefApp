import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import InputAndSearch from '../InputAndSearch';
import {
  useAddCheck,
  useAddModalInputText,
  useBottomSheetRef,
} from '../../../store/store';
import ItemList from '../ItemList';
import BottomButton from '../BottomButton';
import TopMenu from './TopMenu';
import {useGetMyFridgeList} from '../../../api/recipeQuery';
import Loading from '../../elements/Loading';

import {
  useAddIngredients2,
  useGetIngredients,
} from '../../../api/ingredientsQuery';
import {ListData} from '../../../type/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddIngredient = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const [isClicked, setIsClicked] = useState(1);
  const [itemList, setItemList] = useState<ListData[]>([]);
  const {data, isLoading} = useGetMyFridgeList();
  const {refetch} = useGetIngredients();
  const {mutate} = useAddIngredients2();
  const {check, setCheck} = useAddCheck();
  const handleSubmit = async () => {
    if (itemList.length <= 0) return;
    const token = await AsyncStorage.getItem('token');
    if (token) {
      mutate(
        {itemList},
        {
          onSuccess: () => {
            refetch();
            handleClose();
          },
        },
      );
    } else {
      const storedData = await AsyncStorage.getItem('ingredients');
      const data = storedData ? JSON.parse(storedData) : [];
      const newData = [...data, ...itemList];
      await AsyncStorage.setItem('ingredients', JSON.stringify(newData));
      setCheck(!check);
      handleClose();
    }
  };

  const handleClose = () => {
    setIsClicked(1);
    setItemList([]);
    bottomSheetRef.current?.close();
  };

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
            setItemList={setItemList}
          />
        </View>
        <ItemList
          isClicked={isClicked}
          itemList={itemList}
          setItemList={setItemList}
          title="등록된 재료들"
        />
      </View>
      <BottomButton
        title="재료 등록하기"
        buttonColor={itemList.length > 0 ? colors.text : colors.disabled2}
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
