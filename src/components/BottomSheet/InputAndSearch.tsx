import {Alert, Keyboard, StyleSheet, View} from 'react-native';
import React, {Dispatch, useEffect, useState} from 'react';
import FButton from '../elements/FButton';
import {colors, FWidth} from '../../../globalStyle';
import FInput from '../elements/FInput';
import {useAddModalInputText} from '../../store/store';
import FText from '../elements/FText';

type InputAndSearchProps = {
  itemList: any;
  setItemList: Dispatch<React.SetStateAction<string[]>>;
};

const InputAndSearch = ({itemList, setItemList}: InputAndSearchProps) => {
  const {addTitle, setAddTitle} = useAddModalInputText();
  const [errorMsg, setErrorMsg] = useState('');
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

  useEffect(() => {
    if (addTitle && filteredIngredients.length === 0) {
      setErrorMsg('해당 재료명을 찾을 수 없습니다');
    } else {
      setErrorMsg('');
    }
  }, [addTitle, filteredIngredients]);

  return (
    <View>
      <View style={styles.inputContainer}>
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
      </View>
      {filteredIngredients.length > 0 && (
        <View style={styles.listContainer}>
          {filteredIngredients.map((item: any) => (
            <FButton
              key={item.id}
              buttonStyle="noneStyle"
              fBStyle={{paddingVertical: FWidth * 12}}
              onPress={() => {
                Keyboard.dismiss();
                setAddTitle('');
                addItemToList(item.name);
              }}>
              <FText fStyle="M_16" color={colors.text} text={item.name} />
            </FButton>
          ))}
        </View>
      )}
    </View>
  );
};

export default InputAndSearch;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: FWidth * 24,
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
