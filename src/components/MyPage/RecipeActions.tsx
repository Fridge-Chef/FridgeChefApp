import {LayoutChangeEvent, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
          <View style={styles.textLine}>
            <Text style={[fontStyles.M_14, styles.textColor]}>
              {item.recipeAction}
            </Text>
          </View>
          <FButton
            buttonStyle="noneStyle"
            onPress={() => handleList(item.recipeAction)}>
            <View style={styles.textLine2}>
              <Text style={(fontStyles.M_16, styles.textColor2)}>
                {item.recipeActionCount}
              </Text>
            </View>
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

  textLine: {
    height: FWidth * 20,
    justifyContent: 'center',
  },

  textLine2: {
    height: FWidth * 24,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },

  textColor2: {
    color: colors.primary[1],
    marginTop: FWidth * 6,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
