import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FText from '../elements/FText';

const RecipeActions = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const recipeActionInfo = [
    {recipeAction: '레시피 검색', recipeActionCount: '2회'},
    {recipeAction: '레시피 작성', recipeActionCount: '5회'},
    {recipeAction: '후기 작성', recipeActionCount: '2회'},
  ];

  const handleList = (title: string) => {
    switch (title) {
      case '레시피 검색':
        return console.log('레시피 검색');
      case '레시피 작성':
        return console.log('레시피 작성');
      case '후기 작성':
        return console.log('후기 작성');
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {recipeActionInfo.map((item, index) => (
        <View key={index} style={styles.textContainer}>
          <FText fStyle="M_14" color={colors.text} text={item.recipeAction} />
          <FButton
            buttonStyle="noneStyle"
            onPress={() => handleList(item.recipeAction)}>
            <FText
              fStyle="M_16"
              mTop={FWidth * 6}
              color={colors.primary[1]}
              text={item.recipeActionCount}
            />
          </FButton>
        </View>
      ))}
    </View>
  );
};

export default RecipeActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: FWidth * 16,
    borderRadius: 16,
    padding: FWidth * 20,
    borderWidth: 1,
    borderColor: colors.border,
  },

  textContainer: {
    paddingHorizontal: FWidth * 16.83,
    alignItems: 'center',
  },
});
