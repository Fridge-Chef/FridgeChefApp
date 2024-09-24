import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import SvgImage from '../../elements/SvgImage';
import ReviewsComponent from './ReviewsComponent';
import TotalPoint from './TotalPoint';

type UserInfoProps = {
  name: string;
  point: number;
};

const UserInfo = ({name, point}: UserInfoProps) => {
  return (
    <View style={styles.container}>
      <SvgImage type="testIcon" width={16} height={16} />
      <Text style={[fontStyles.M_14, styles.textColor]}>{name}님</Text>
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

  textColor: {
    color: colors.text,
    marginLeft: FWidth * 4,
  },
});
