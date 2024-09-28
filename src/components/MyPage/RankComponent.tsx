import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

type RankComponentProps = {
  rank: string;
};

const RankComponent = ({rank}: RankComponentProps) => {
  return (
    <View style={styles.rankContainer}>
      <FText fStyle="B_10" color={colors.secondary[1]} text={rank} />
    </View>
  );
};

export default RankComponent;

const styles = StyleSheet.create({
  rankContainer: {
    marginLeft: FWidth * 4,
    paddingHorizontal: FWidth * 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.secondary[1],
  },
});
