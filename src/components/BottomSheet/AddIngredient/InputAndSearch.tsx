import {Alert, Keyboard, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import FButton from '../../elements/FButton';
import {FHeight, fontFamilies, FWidth} from '../../../../globalStyle';
import {IngredientList} from '../../../utils/list';
import FInput from '../../elements/FInput';

type InputAndSearchProps = {
  setItemList: Dispatch<React.SetStateAction<string[]>>;
};

const InputAndSearch = ({setItemList}: InputAndSearchProps) => {
  const [inputText, setInputText] = useState('');

  const filteredIngredients = inputText
    ? IngredientList.filter(ingredient => ingredient.name.includes(inputText))
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
          value={inputText}
          fontSize={18}
          placeholder="재료를 입력해주세요"
          onChangeText={text => {
            setInputText(text);
          }}
          onSubmitEditing={() => {
            console.log(inputText);
            Keyboard.dismiss();
            addItemToList(inputText);
            setItemList(prev => [...prev, inputText]);
          }}
        />
      </View>
      {filteredIngredients.length > 0 && (
        <View style={styles.listContainer}>
          {filteredIngredients.map(item => (
            <FButton
              key={item.id}
              buttonStyle="noneStyle"
              title={item.name}
              titleColor="black"
              titlePadding={FWidth * 12}
              fontSize={16}
              fontFamily={fontFamilies.pretendardMedium}
              onPress={() => {
                console.log(item.name);
                Keyboard.dismiss();
                setInputText('');
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
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#D8DAE0',
  },
});
