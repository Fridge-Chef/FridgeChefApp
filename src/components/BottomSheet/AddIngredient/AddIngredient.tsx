import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import TopTitle from '../TopTitle';
import InputAndSearch from '../InputAndSearch';
import {useAddModalInputText, useBottomSheetRef} from '../../../store/store';
import ItemList from '../ItemList';
import BottomButton from '../BottomButton';
import {IngredientList} from '../../../utils/list';

const AddIngredient = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const [itemList, setItemList] = useState<string[]>([]);
  const handleSubmit = () => {
    if (itemList.length === 0) return;
    setItemList([]);
    bottomSheetRef.current?.close();
  };
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setAddTitle('');
        Keyboard.dismiss();
      }}>
      <View style={styles.contentContainer}>
        <TopTitle title="재료 등록하기" />
        <InputAndSearch itemList={IngredientList} setItemList={setItemList} />
        <ItemList itemList={itemList} setItemList={setItemList} title="재료" />
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
    flex: 1,
    justifyContent: 'space-between',
  },

  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 28,
  },
});
