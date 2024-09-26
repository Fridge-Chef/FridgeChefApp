import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import Heart from '../../../utils/Svg/Heart';
import Star2 from '../../../utils/Svg/Star2';
import {useTopTabBarName} from '../../../store/store';
import LikeIcon from '../../../utils/Svg/LikeIcon';

type ViewAndLikeProps = {
  like: number;
  favorites: number;
  myLike?: number;
};

const ViewAndLike = ({like, favorites, myLike}: ViewAndLikeProps) => {
  const {tabBarName} = useTopTabBarName();

  return (
    <View style={styles.container}>
      {tabBarName === '레시피 후기' ? (
        <View style={styles.textAndIconContainer}>
          <LikeIcon />
          <Text
            style={[
              fontStyles.B_12,
              {
                color: colors.b500,
                marginLeft: FWidth * 4,
              },
            ]}>
            {myLike}
          </Text>
        </View>
      ) : (
        <>
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
