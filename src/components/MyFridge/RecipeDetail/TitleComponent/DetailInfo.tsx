import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import DetailLikeHeart from '../../../../utils/Svg/DetailLikeHeart';
import DetailScoreStar from '../../../../utils/Svg/DetailScoreStar';
import DetailUserBadge from '../../../../utils/Svg/DetailUserBadge';
import FText from '../../../elements/FText';

type DetailInfoProps = {
  writer: string;
  hit: number;
  favorite: number;
  reviews: number;
};

const DetailInfo = ({writer, hit, favorite, reviews}: DetailInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconAlign}>
        <DetailUserBadge />
        <FText
          mLeft={FWidth * 4}
          fStyle="B_16"
          color={colors.text}
          text={writer}
        />
      </View>
      <View style={[styles.iconAlign, {marginLeft: FWidth * 14}]}>
        <DetailScoreStar />
        <FText
          mLeft={FWidth * 4}
          fStyle="M_14"
          color={colors.text}
          text={hit}
        />
        <FText fStyle="M_14" color={colors.b500} text={` (${reviews})`} />
      </View>
      <View style={[styles.iconAlign, {marginLeft: FWidth * 14}]}>
        <DetailLikeHeart />
        <FText
          mLeft={FWidth * 4}
          fStyle="M_14"
          color={colors.text}
          text={favorite}
        />
      </View>
    </View>
  );
};

export default DetailInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconAlign: {
    marginTop: FWidth * 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
