import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import Heart from '../../../../utils/Svg/Heart';
import Star2 from '../../../../utils/Svg/Star2';
import {useTopTabBar} from '../../../../store/store';
import FText from '../../../elements/FText';

type ViewAndLikeProps = {
  like: number;
  favorites: number;
};

const ViewAndLike = ({like, favorites}: ViewAndLikeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textAndIconContainer}>
        <Star2 />
        <FText
          mLeft={FWidth * 4}
          fStyle="R_14"
          color={colors.b500}
          text={favorites}
        />
      </View>
      <View style={styles.textAndIconContainer}>
        <Heart />
        <FText
          mLeft={FWidth * 2}
          fStyle="R_14"
          color={colors.b500}
          text={like}
        />
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
