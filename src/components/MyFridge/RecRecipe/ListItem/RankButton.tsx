import {StyleSheet} from 'react-native';
import React from 'react';
import ArrowSubTitle from '../../../elements/SubTitle/ArrowSubTitle';
import {useRankName} from '../../../../store/rankingStore';

type RankButtonProps = {
  onPress: () => void;
};

const RankButton = ({onPress}: RankButtonProps) => {
  const {rankName} = useRankName();
  return <ArrowSubTitle onPress={onPress} name={rankName} />;
};

export default RankButton;

const styles = StyleSheet.create({});
