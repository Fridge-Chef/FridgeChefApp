import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  FHeight,
  fontFamilies,
  fontStyles,
  FWidth,
} from '../../../../globalStyle';
import SvgImage from '../../elements/SvgImage';

type ViewAndLikeProps = {
  like: number;
  favorites: number;
};

const ViewAndLike = ({like, favorites}: ViewAndLikeProps) => {
  return (
    <View style={styles.iconsContainer}>
      <View style={styles.textAndIconContainer}>
        <SvgImage type="star" width={16} height={16} fill={colors.white} />
        <Text
          style={[
            fontStyles.B_12,
            {
              color: colors.b500,
              marginLeft: FWidth * 4,
            },
          ]}>
          {favorites}
        </Text>
      </View>
      <View style={styles.textAndIconContainer}>
        <SvgImage type="heart2" width={16} height={16} fill={colors.white} />
        <Text
          style={[
            fontStyles.B_12,
            {color: colors.b500, marginLeft: FWidth * 2},
          ]}>
          {like}
        </Text>
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
