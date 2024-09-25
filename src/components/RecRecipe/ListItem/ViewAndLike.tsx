import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import SvgImage from '../../elements/SvgImage';
import Heart from '../../../utils/Svg/Heart';
import Star2 from '../../../utils/Svg/Star2';

type ViewAndLikeProps = {
  like: number;
  favorites: number;
};

const ViewAndLike = ({like, favorites}: ViewAndLikeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textAndIconContainer}>
        <Star2 />
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
        <Heart />
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textAndIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: FWidth * 8,
  },
});
