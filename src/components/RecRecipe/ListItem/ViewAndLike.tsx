import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FHeight, fontFamilies, FWidth} from '../../../../globalStyle';

type ViewAndLikeProps = {
  like: number;
  favorites: number;
};

const ViewAndLike = ({like, favorites}: ViewAndLikeProps) => {
  return (
    <View style={styles.iconsContainer}>
      <View style={styles.textAndIconContainer}>
        <Text style={styles.iconText}>★</Text>
        <Text style={styles.iconText}>{favorites}</Text>
      </View>
      <View style={styles.textAndIconContainer}>
        <Text style={styles.iconText}>♡</Text>
        <Text style={styles.iconText}>{like}</Text>
      </View>
    </View>
  );
};

export default ViewAndLike;

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textAndIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: FHeight * 4,
    marginRight: FWidth * 8,
  },

  iconText: {
    fontSize: 12,
    color: '#545559',
    fontFamily: fontFamilies.pretendardMedium,
    lineHeight: FHeight * 14,
    marginLeft: FWidth * 2,
  },
});
