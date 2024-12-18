import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FText from '../elements/FText';

type RecipeActionsProps = {
  userRecipeList: number;
  userCommentList: number;
};

const RecipeActions = ({
  userRecipeList,
  userCommentList,
}: RecipeActionsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const recipeActionInfo = [
    {actionTitle: '레시피 작성', actionCount: userRecipeList},
    {actionTitle: '후기 작성', actionCount: userCommentList},
  ];

  const handleList = (title: string) => {
    switch (title) {
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
          <FText fStyle="R_14" color={colors.text} text={item.actionTitle} />
          <FButton
            buttonStyle="noneStyle"
            onPress={() => handleList(item.actionTitle)}>
            <View style={styles.textAlign}>
              <FText
                fStyle="M_16"
                color={colors.primary[1]}
                text={item.actionCount}
              />
              <FText fStyle="M_16" color={colors.primary[1]} text="회" />
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
    marginTop: FWidth * 20,
    width: '100%',
    flexDirection: 'row',

    borderRadius: 12,
    padding: FWidth * 16,
    backgroundColor: colors.white,
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
  },

  textAlign: {
    marginTop: FWidth * 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
