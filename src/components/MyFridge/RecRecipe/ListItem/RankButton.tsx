import React from 'react';
import {StyleSheet} from 'react-native';
import {useRecipeLikeRankName} from '../../../../store/rankingStore';
import ArrowSubTitle from '../../../elements/SubTitle/ArrowSubTitle';

type RankButtonProps = {
  onPress: () => void;
};

const RankButton = ({onPress}: RankButtonProps) => {
  const {rankName} = useRecipeLikeRankName();
  return <ArrowSubTitle onPress={onPress} name={rankName} />;
};

export default RankButton;

const styles = StyleSheet.create({});
