import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FButton from '../FButton';
import FText from '../FText';
import ArrowTitleIcon from '../../../utils/Svg/ArrowTitleIcon';
import {colors, FWidth} from '../../../../globalStyle';
import {useRankName} from '../../../store/store';

type ArrowSubTitleProps = {
  onPress?: () => void;
};

const ArrowSubTitle = ({onPress}: ArrowSubTitleProps) => {
  const {rankName} = useRankName();
  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.container}
      onPress={onPress}>
      <FText
        mRight={FWidth * 4}
        fStyle="M_14"
        color={colors.text}
        text={rankName}
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
