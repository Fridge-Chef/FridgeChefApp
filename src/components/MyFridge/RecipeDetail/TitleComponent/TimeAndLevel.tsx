import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../../../elements/FText';
import {colors, FWidth} from '../../../../../globalStyle';
import DetailTime from '../../../../utils/Svg/DetailTime';
import DetailLevel from '../../../../utils/Svg/DetailLevel';

type TimeAndLevelProps = {
  category: string;
  recipeTime: string;
  recipeLevel: string;
};

const TimeAndLevel = ({
  category,
  recipeTime,
  recipeLevel,
}: TimeAndLevelProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, {borderColor: colors.secondary[1]}]}>
        <FText fStyle="B_12" color={colors.secondary[1]} text={category} />
      </View>
      <View style={[styles.iconContainer, {borderColor: colors.b500}]}>
        <DetailTime />
        <FText
          mLeft={FWidth * 2}
          fStyle="B_12"
          color={colors.b500}
          text={`${recipeTime}분`}
        />
      </View>
      <View style={[styles.iconContainer, {borderColor: colors.b500}]}>
        <DetailLevel />
        <FText
          mLeft={FWidth * 2}
          fStyle="B_12"
          color={colors.b500}
          text={recipeLevel}
        />
      </View>
    </View>
  );
};

export default TimeAndLevel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: FWidth * 16,
  },

  iconContainer: {
    paddingHorizontal: FWidth * 8,
    paddingVertical: FWidth * 4,
    borderWidth: 1,

    borderRadius: 20,
    marginRight: FWidth * 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
