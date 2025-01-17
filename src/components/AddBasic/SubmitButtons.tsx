import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import {useAddIngredients} from '../../api/ingredientsQuery';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

type SubmitButtonsProps = {
  basicItem: {
    ingredientName: string;
    storage: string;
  }[];
};

const SubmitButtons = ({basicItem}: SubmitButtonsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useAddIngredients();

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        mutate(
          {ingredients: basicItem},
          {
            onSuccess: () => {
              navigation.reset({
                index: 0,
                routes: [{name: 'bottomTab'}],
              });
              console.log('재료등록 성공');
            },
            onError: async () => {
              console.log('재료등록 실패');
            },
          },
        );
      } else {
        await AsyncStorage.setItem('ingredients', JSON.stringify(basicItem));
        navigation.reset({
          index: 0,
          routes: [{name: 'bottomTab'}],
        });
      }
    } catch (error) {
      console.log('냉장고 등록 에러', error);
    }
  };

  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={[styles.buttonStyle, {backgroundColor: colors.primary[1]}]}
        onPress={handleSubmit}>
        <FText
          fStyle="B_16"
          color={colors.white}
          text={'네, 이대로 등록해주세요!'}
        />
      </FButton>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={[styles.buttonStyle, {backgroundColor: colors.text}]}
        onPress={async () => {
          await AsyncStorage.removeItem('ingredients');
          navigation.reset({
            index: 0,
            routes: [{name: 'bottomTab'}],
          });
        }}>
        <FText
          fStyle="B_16"
          color={colors.white}
          text={'아니요, 직접 등록할게요!'}
        />
      </FButton>
    </View>
  );
};

export default SubmitButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 64,
  },
  buttonStyle: {
    paddingVertical: FWidth * 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: FWidth * 24,
  },
});
