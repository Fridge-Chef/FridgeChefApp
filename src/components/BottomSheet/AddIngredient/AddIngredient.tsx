import {
  Dimensions,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FButton from '../../elements/FButton';
import {fontFamilies, FWidth} from '../../../../globalStyle';
import TopTitle from '../TopTitle';
import InputAndSearch from './InputAndSearch';
import {useBottomSheetRef} from '../../../store/store';
import ItemList from './ItemList';
import BottomButton from '../BottomButton';

const AddIngredient = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const [itemList, setItemList] = useState<string[]>([]);
  const handleSubmit = () => {
    if (itemList.length === 0) return;
    setItemList([]);
    bottomSheetRef.current?.close();
  };

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <View style={styles.contentContainer}>
        <TopTitle title="재료 추가 등록하기" />
        <InputAndSearch setItemList={setItemList} />
        <ItemList itemList={itemList} setItemList={setItemList} />
      </View>
      <BottomButton
        title="재료 등록하기"
        buttonColor={itemList.length > 0 ? 'black' : '#E6E6E6'}
        onPress={handleSubmit}
      />
    </Pressable>
  );
};

export default AddIngredient;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'space-between',
  },

  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 33,
  },
});
