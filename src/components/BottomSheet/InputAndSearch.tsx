import {Alert, Keyboard, StyleSheet, View} from 'react-native';
import React, {Dispatch, useEffect, useState} from 'react';
import FButton from '../elements/FButton';
import {colors, FWidth} from '../../../globalStyle';
import FInput from '../elements/FInput';
import {useAddModalInputText} from '../../store/store';
import FText from '../elements/FText';
import {ListData} from '../../type/types';

type InputAndSearchProps = {
  itemList: string[];
  setItemList: Dispatch<React.SetStateAction<ListData[]>>;
  isClicked: number;
};

const InputAndSearch = ({
  itemList,
  setItemList,
  isClicked,
}: InputAndSearchProps) => {
  const {addTitle, setAddTitle} = useAddModalInputText();
  const [errorMsg, setErrorMsg] = useState('');
  const filteredIngredients = addTitle
    ? itemList.filter((itemList: any) => itemList.includes(addTitle))
    : [];

  const addItemToList = (item: string) => {
    setItemList(prev => [
      ...prev,
      {
        ingredientName: item,
        storage: isClicked === 1 ? 'REFRIGERATION' : 'TEMPERATURE',
      },
    ]);
  };

  useEffect(() => {
    if (addTitle && filteredIngredients.length === 0) {
      setErrorMsg('해당 재료명을 찾을 수 없습니다');
    } else {
      setErrorMsg('');
    }
  }, [addTitle, filteredIngredients]);

  return (
    <>
      <FInput
        inputStyle="default"
        value={addTitle}
        placeholder="재료를 입력해주세요"
        errorMsg={true}
        errorText={errorMsg}
        onChangeText={text => {
          setAddTitle(text);
        }}
      />
      {filteredIngredients.length > 0 && (
        <View style={styles.listContainer}>
          {filteredIngredients.map((item, index) => (
            <FButton
              key={index}
              buttonStyle="noneStyle"
              fBStyle={{paddingVertical: FWidth * 12}}
              onPress={() => {
                Keyboard.dismiss();
                setAddTitle('');
                addItemToList(item);
              }}>
              <FText fStyle="M_16" color={colors.text} text={item} />
            </FButton>
          ))}
        </View>
      )}
    </>
  );
};

export default InputAndSearch;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: FWidth * 8,
  },

  listContainer: {
    marginTop: FWidth * 10,
    paddingHorizontal: FWidth * 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    zIndex: 999,
  },
});
