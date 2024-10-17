import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailScoreStar from '../../../../utils/Svg/DetailScoreStar';
import FText from '../../../elements/FText';
import {colors, FWidth} from '../../../../../globalStyle';
import DetailUserBadge from '../../../../utils/Svg/DetailUserBadge';
import DetailLikeHeart from '../../../../utils/Svg/DetailLikeHeart';

type DetailInfoProps = {
  writer: string;
  like: number;
  favorite: number;
  reviews: number;
};

const DetailInfo = ({writer, like, favorite, reviews}: DetailInfoProps) => {
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
          text={like}
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
