import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../../elements/FText';
import {colors, FWidth} from '../../../../../globalStyle';
import DetailUserBadge from '../../../../utils/Svg/DetailUserBadge';
import TimeAndLevel from '../../../MyFridge/RecipeDetail/TitleComponent/TimeAndLevel';

type PreviewTitleProps = {
  title: string;
  dishCategory: {foodStyle: string; foodType: string};
  dishTime: string;
  dishLevel: string;
};

const PreviewTitle = ({
  title,
  dishCategory,
  dishTime,
  dishLevel,
}: PreviewTitleProps) => {
  return (
    <View style={styles.container}>
      <TimeAndLevel
        dishCategory={`${dishCategory.foodStyle}, ${dishCategory.foodType}`}
        dishTime={dishTime}
        dishLevel={dishLevel}
      />
      <FText fStyle="B_22" color={colors.text} text={title} />
      <View style={styles.userAlign}>
        <DetailUserBadge />
        <FText
          mLeft={FWidth * 6}
          fStyle="B_16"
          color={colors.text}
          text={'자취의신'}
        />
      </View>
    </View>
  );
};

export default PreviewTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },

  userAlign: {
    marginTop: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
