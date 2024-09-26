import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import SvgImage from '../../elements/SvgImage';
import ReviewsComponent from './ReviewsComponent';
import TotalPoint from './TotalPoint';
import UserIcon2 from '../../../utils/Svg/UserIcon2';

type UserInfoProps = {
  name: string;
  point: number;
};

const UserInfo = ({name, point}: UserInfoProps) => {
  return (
    <View style={styles.container}>
      <UserIcon2 />
      <View style={styles.textLine}>
        <Text style={[fontStyles.M_14, styles.textColor]}>{name}님</Text>
      </View>
      <View style={styles.reviewPointContainer}>
        <TotalPoint point={point} />
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textLine: {
    marginLeft: FWidth * 4,
    height: FWidth * 20,
    justifyContent: 'center',
  },

  reviewPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: FWidth * 6,
  },

  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },
});
