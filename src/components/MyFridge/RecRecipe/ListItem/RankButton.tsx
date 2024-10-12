import {StyleSheet} from 'react-native';
import React from 'react';
import ArrowSubTitle from '../../../elements/SubTitle/ArrowSubTitle';

type RankButtonProps = {
  onPress: () => void;
};

const RankButton = ({onPress}: RankButtonProps) => {
  return <ArrowSubTitle onPress={onPress} />;
};

export default RankButton;

const styles = StyleSheet.create({});
