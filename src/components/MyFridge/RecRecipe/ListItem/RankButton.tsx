import React from 'react';
import {StyleSheet} from 'react-native';
import ArrowSubTitle from '../../../elements/SubTitle/ArrowSubTitle';

type RankButtonProps = {
  rankName: string;
  onPress: () => void;
};

const RankButton = ({rankName, onPress}: RankButtonProps) => {
  return <ArrowSubTitle onPress={onPress} name={rankName} />;
};

export default RankButton;

const styles = StyleSheet.create({});
