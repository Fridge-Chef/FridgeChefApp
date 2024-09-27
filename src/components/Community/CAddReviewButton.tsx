import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../elements/FText';
import FButton from '../elements/FButton';
import {colors, FWidth} from '../../../globalStyle';
import Edit2 from '../../utils/Svg/Edit2';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type CAddReviewButtonProps = {
  list: {
    id: number;
    text: string;
  }[];
};

const CAddReviewButton = ({list}: CAddReviewButtonProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <FButton
      buttonStyle="addButton"
      fBStyle={styles.buttonStyle}
      onPress={() => navigation.navigate('addRecipe')}>
      <View style={styles.iconAlign}>
        <Edit2 />
        <FText
          mLeft={FWidth * 6}
          fStyle="B_16"
          text="레시피 작성"
          color={colors.white}
        />
      </View>
    </FButton>
  );
};

export default CAddReviewButton;

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    bottom: FWidth * 34,
    right: FWidth * 21,
    backgroundColor: colors.text,
  },

  iconAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
