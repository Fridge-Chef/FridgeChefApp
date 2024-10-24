import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopTitle from '../TopTitle';
import {colors, FWidth} from '../../../../globalStyle';
import InputAndSearch from '../InputAndSearch';
import ItemList from '../ItemList';
import {useBottomSheetRef} from '../../../store/store';
import BottomButton from '../BottomButton';
import {IngredientList} from '../../../utils/list';

const AddCondiment = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const [itemList, setItemList] = useState<string[]>([]);
  const handleSubmit = () => {
    if (itemList.length === 0) return;
    setItemList([]);
    bottomSheetRef.current?.close();
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TopTitle title="조미료 등록하기" onPress={() => {}} />
        <InputAndSearch itemList={IngredientList} setItemList={setItemList} />
        <ItemList
          itemList={itemList}
          setItemList={setItemList}
          title="등록된 재료들"
        />
      </View>
      <BottomButton
        title="조미료 등록하기"
        buttonColor={itemList.length > 0 ? colors.text : colors.disabled2}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AddCondiment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 22,
  },
});
