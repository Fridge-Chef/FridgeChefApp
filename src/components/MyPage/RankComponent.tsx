import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../globalStyle';

type RankComponentProps = {
  rank: string;
};

const RankComponent = ({rank}: RankComponentProps) => {
  return (
    <View style={styles.rankContainer}>
      <View style={styles.textLine}>
        <Text style={[fontStyles.B_10, styles.textColor]}>{rank}</Text>
      </View>
    </View>
  );
};

export default RankComponent;

const styles = StyleSheet.create({
  rankContainer: {
    marginLeft: FWidth * 6,
    paddingHorizontal: FWidth * 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.secondary[1],
  },

  textLine: {
    height: FWidth * 18,
    justifyContent: 'center',
  },

  textColor: {
    color: colors.secondary[1],
    includeFontPadding: false,
    alignItems: 'center',
  },
});
