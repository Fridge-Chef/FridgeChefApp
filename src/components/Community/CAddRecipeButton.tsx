import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import AddRecipeButtonEdit from '../../utils/Svg/AddRecipeButtonEdit';
import FButton from '../elements/FButton';
import FText from '../elements/FText';

type CAddRecipeButtonProps = {
  scrollOffset: number;
  prevScrollOffset: number;
};

const CAddRecipeButton = ({
  scrollOffset,
  prevScrollOffset,
}: CAddRecipeButtonProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={[
        styles.buttonStyle,
        {
          paddingVertical: FWidth * 10,
          borderRadius: 40,
          paddingHorizontal:
            prevScrollOffset > scrollOffset ? FWidth * 16 : FWidth * 12,
        },
      ]}
      onPress={() => navigation.navigate('addRecipe')}>
      <View style={styles.iconAlign}>
        <View style={styles.iconContainer}>
          <AddRecipeButtonEdit />
        </View>
        {prevScrollOffset > scrollOffset && (
          <FText
            mLeft={FWidth * 6}
            fStyle="B_14"
            text="레시피 작성"
            color={colors.white}
          />
        )}
      </View>
    </FButton>
  );
};

export default CAddRecipeButton;

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    bottom: FWidth * 34,
    right: FWidth * 22,
    backgroundColor: colors.text,
  },

  iconAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    height: FWidth * 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
