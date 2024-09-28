import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../../../elements/FText';
import {colors, FWidth} from '../../../../../globalStyle';
import ArrowRight2 from '../../../../utils/Svg/ArrowRight2';
import FButton from '../../../elements/FButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MoreButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <FButton
      buttonStyle="noneStyle"
      fBStyle={styles.alignText}
      onPress={() => navigation.navigate('community', {initialIndex: 1})}>
      <FText
        mRight={FWidth * 2}
        fStyle="R_16"
        color={colors.subText}
        text="전체보기"
      />
      <ArrowRight2 />
    </FButton>
  );
};

export default MoreButton;

const styles = StyleSheet.create({
  alignText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
