import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import FText from '../elements/FText';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAddIngredients} from '../../api/ingredientsQuery';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SubmitButtonsProps = {
  basicItem: {
    ingredientName: string;
    storage: string;
  }[];
};

const SubmitButtons = ({basicItem}: SubmitButtonsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useAddIngredients();
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={[styles.buttonStyle, {backgroundColor: colors.primary[1]}]}
        onPress={async () => {
          if ((await AsyncStorage.getItem('token')) !== null) {
            mutate(
              {ingredients: basicItem},
              {
                onSuccess: () => {
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'bottomTab'}],
                  });
                },
                onError: () => {
                  console.log('재료등록 실패');
                },
              },
            );
          } else {
            await AsyncStorage.setItem(
              'ingredients',
              JSON.stringify(basicItem),
            );
            navigation.reset({
              index: 0,
              routes: [{name: 'bottomTab'}],
            });
          }
        }}>
        <FText
          fStyle="B_16"
          color={colors.white}
          text={'네, 이대로 등록해주세요!'}
        />
      </FButton>
      <FButton
        buttonStyle="noneStyle"
        fBStyle={[styles.buttonStyle, {backgroundColor: colors.text}]}
        onPress={() => {
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
