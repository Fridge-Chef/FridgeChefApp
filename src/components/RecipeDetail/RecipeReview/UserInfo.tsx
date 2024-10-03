import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import TotalPoint from './TotalPoint';
import UserIcon2 from '../../../utils/Svg/UserIcon2';
import FText from '../../elements/FText';
import DetailUserBadge from '../../../utils/Svg/DetailUserBadge';

type UserInfoProps = {
  name: string;
  point: number;
};

const UserInfo = ({name, point}: UserInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <DetailUserBadge />
        <FText
          mHor={FWidth * 6}
          fStyle="B_14"
          color={colors.text}
          text={`${name}님`}
        />
        <View style={styles.userContainer}>
          <TotalPoint point={point} />
        </View>
      </View>
      <View>
        <FText fStyle="M_12" color={colors.b300} text="2021.06.07" />
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
