import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import TotalPoint from './TotalPoint';
import UserIcon2 from '../../../../utils/Svg/UserIcon2';
import FText from '../../../elements/FText';
import DetailUserBadge from '../../../../utils/Svg/DetailUserBadge';
import DetailReviewMore from '../../../../utils/Svg/DetailReviewMore';

type UserInfoProps = {
  writer: string;
  point: number;
};

const UserInfo = ({writer, point}: UserInfoProps) => {
  return (
    <View style={styles.container}>
      <DetailUserBadge />
      <FText
        mHor={FWidth * 6}
        fStyle="B_14"
        color={colors.text}
        text={`${writer}님`}
      />
      <View style={styles.container}>
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
});
