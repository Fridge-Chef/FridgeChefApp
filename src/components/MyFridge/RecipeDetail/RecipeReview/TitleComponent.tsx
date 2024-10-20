import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import FButton from '../../../elements/FButton';
import FText from '../../../elements/FText';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DetailReviewEdit from '../../../../utils/Svg/DetailReviewEdit';
import SubTitle2 from '../../../elements/SubTitle/SubTitle2';

type TitleComponentProps = {
  title: string;
};

const TitleComponent = ({title}: TitleComponentProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <SubTitle2 title="레시피 후기" />
      <FButton
        buttonStyle="noneStyle"
        onPress={() => navigation.navigate('addRecipeReview', {title})}>
        <View style={styles.buttonContainer}>
          <DetailReviewEdit />
          <FText
            mLeft={FWidth * 4}
            fStyle="M_14"
            color={colors.black}
            text="후기 작성"
          />
        </View>
      </FButton>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: FWidth * 12,
    paddingVertical: FWidth * 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 40,
  },
});
