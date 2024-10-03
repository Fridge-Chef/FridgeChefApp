import {StyleSheet, View} from 'react-native';
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
  scrollOffset: number;
  prevScrollOffset: number;
};

const CAddReviewButton = ({
  list,
  scrollOffset,
  prevScrollOffset,
}: CAddReviewButtonProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <FButton
      buttonStyle="addButton"
      fBStyle={[
        styles.buttonStyle,
        {
          paddingHorizontal:
            prevScrollOffset > scrollOffset ? FWidth * 20 : FWidth * 12,
        },
      ]}
      onPress={() => navigation.navigate('addRecipe')}>
      <View style={styles.iconAlign}>
        <View
          style={[
            styles.iconContainer,
            {
              width: prevScrollOffset > scrollOffset ? null : FWidth * 24,
            },
          ]}>
          <Edit2 />
        </View>
        {prevScrollOffset > scrollOffset && (
          <FText
            mLeft={FWidth * 6}
            fStyle="B_16"
            text="레시피 작성"
            color={colors.white}
          />
        )}
      </View>
    </FButton>
  );
};

export default CAddReviewButton;

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
    height: FWidth * 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
