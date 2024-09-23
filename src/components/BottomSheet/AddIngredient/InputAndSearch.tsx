import {Alert, Keyboard, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import FButton from '../../elements/FButton';
import {
  colors,
  FHeight,
  fontFamilies,
  fontStyles,
  FWidth,
} from '../../../../globalStyle';
import {IngredientList} from '../../../utils/list';
import FInput from '../../elements/FInput';
import {useAddModalInputText} from '../../../store/store';

type InputAndSearchProps = {
  itemList: any;
  setItemList: Dispatch<React.SetStateAction<string[]>>;
};

const InputAndSearch = ({itemList, setItemList}: InputAndSearchProps) => {
  const {addTitle, setAddTitle} = useAddModalInputText();
  const filteredIngredients = addTitle
    ? itemList.filter((itemList: any) => itemList.name.includes(addTitle))
    : [];

  const addItemToList = (item: string) => {
    setItemList(prev => {
      if (!prev.includes(item)) {
        return [...prev, item];
      } else {
        Alert.alert('이미 추가된 재료입니다.');
        return prev;
      }
    });
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <FInput
          inputStyle="default"
          value={addTitle}
          placeholder="재료를 입력해주세요"
          onChangeText={text => {
            setAddTitle(text);
          }}
        />
      </View>
      {filteredIngredients.length > 0 && (
        <View style={styles.listContainer}>
          {filteredIngredients.map((item: any) => (
            <FButton
              key={item.id}
              buttonStyle="noneStyle"
              title={item.name}
              titleColor={colors.text}
              style={fontStyles.M_16}
              fStyle={{paddingVertical: FHeight * 12}}
              onPress={() => {
                console.log(item.name);
                Keyboard.dismiss();
                setAddTitle('');
                addItemToList(item.name);
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default InputAndSearch;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: FHeight * 24,
  },

  listContainer: {
    marginTop: FHeight * 10,
    paddingHorizontal: FWidth * 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    zIndex: 999,
  },
});
