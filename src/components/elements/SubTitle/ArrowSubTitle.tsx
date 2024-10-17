import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../FButton';
import FText from '../FText';
import ArrowTitleIcon from '../../../utils/Svg/ArrowTitleIcon';
import {colors, FWidth} from '../../../../globalStyle';
import {useRankName, useRecipeLikeRankName} from '../../../store/rankingStore';

type ArrowSubTitleProps = {
  name: string;
  onPress?: () => void;
};

const ArrowSubTitle = ({name, onPress}: ArrowSubTitleProps) => {
  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.container}
      onPress={onPress}>
      <FText
        mRight={FWidth * 4}
        fStyle="M_14"
        color={colors.text}
        text={name}
      />
      <ArrowTitleIcon />
    </FButton>
  );
};

export default ArrowSubTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
