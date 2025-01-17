import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import ArrowTitleIcon from '../../../utils/Svg/ArrowTitleIcon';
import FButton from '../FButton';
import FText from '../FText';

type ArrowSubTitleProps = {
  name: string;
  onPress?: () => void;
};

const ArrowSubTitle = ({name, onPress}: ArrowSubTitleProps) => {
  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.container}
      hitSlop={{
        top: FWidth * 10,
        bottom: FWidth * 10,
        left: FWidth * 10,
        right: FWidth * 10,
      }}
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
    alignSelf: 'flex-start',
  },
});
