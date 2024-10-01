import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import InputAndSearch from '../InputAndSearch';
import {useAddModalInputText, useBottomSheetRef} from '../../../store/store';
import ItemList from '../ItemList';
import BottomButton from '../BottomButton';
import {IngredientList} from '../../../utils/list';
import TopMenu from './TopMenu';
import SubTitleBS from '../SubTitleBS';

const AddIngredient = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const {setAddTitle} = useAddModalInputText();
  const [isClicked, setIsClicked] = useState(1);
  const [itemList, setItemList] = useState<string[]>([]);
  const [itemList2, setItemList2] = useState<string[]>([]);

  const handleSubmit = () => {
    if (itemList.length <= 0 && itemList2.length <= 0) return;
    setItemList([]);
    setItemList2([]);
    bottomSheetRef.current?.close();
  };

  const handleClose = () => {
    setIsClicked(1);
    setItemList([]);
    setItemList2([]);
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
        <TopMenu
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          onPress={handleClose}
        />
        <View style={styles.subTitleContainer}>
          <SubTitleBS title="재료명" />
          <InputAndSearch
            itemList={IngredientList}
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
    marginTop: FWidth * 24,
  },
});
