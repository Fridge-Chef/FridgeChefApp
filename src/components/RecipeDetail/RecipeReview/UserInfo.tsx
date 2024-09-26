import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import SvgImage from '../../elements/SvgImage';
import ReviewsComponent from './ReviewsComponent';
import TotalPoint from './TotalPoint';
import UserIcon2 from '../../../utils/Svg/UserIcon2';
import FText from '../../elements/FText';

type UserInfoProps = {
  name: string;
  point: number;
};

const UserInfo = ({name, point}: UserInfoProps) => {
  return (
    <View style={styles.container}>
      <UserIcon2 />
      <FText
        mLeft={FWidth * 4}
        fStyle="M_14"
        color={colors.text}
        text={`${name}님`}
      />
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

  reviewPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: FWidth * 6,
  },
});
