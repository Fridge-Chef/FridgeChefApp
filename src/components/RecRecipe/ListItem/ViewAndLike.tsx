import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import Heart from '../../../utils/Svg/Heart';
import Star2 from '../../../utils/Svg/Star2';
import {useTopTabBar} from '../../../store/store';
import LikeIcon from '../../../utils/Svg/LikeIcon';
import FText from '../../elements/FText';

type ViewAndLikeProps = {
  like: number;
  favorites: number;
  myLike?: number;
};

const ViewAndLike = ({like, favorites, myLike}: ViewAndLikeProps) => {
  const {tabBarName} = useTopTabBar();

  return (
    <View style={styles.container}>
      {tabBarName === '레시피 후기' ? (
        <View style={styles.textAndIconContainer}>
          <LikeIcon />
          <FText
            mLeft={FWidth * 4}
            fStyle="B_12"
            color={colors.b500}
            text={myLike}
          />
        </View>
      ) : (
        <>
          <View style={styles.textAndIconContainer}>
            <Star2 />
            <FText
              mLeft={FWidth * 4}
              fStyle="B_12"
              color={colors.b500}
              text={favorites}
            />
          </View>
          <View style={styles.textAndIconContainer}>
            <Heart />
            <FText
              mLeft={FWidth * 2}
              fStyle="B_12"
              color={colors.b500}
              text={like}
            />
          </View>
        </>
      )}
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
