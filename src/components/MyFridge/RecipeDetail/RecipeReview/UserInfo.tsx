import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../../globalStyle';
import DetailUserBadge from '../../../../utils/Svg/DetailUserBadge';
import FText from '../../../elements/FText';
import TotalPoint from './TotalPoint';

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
