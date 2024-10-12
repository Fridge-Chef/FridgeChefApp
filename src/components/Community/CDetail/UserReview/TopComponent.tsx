import {StyleSheet, View} from 'react-native';
import React from 'react';
import UserInfo from '../../../MyFridge/RecipeDetail/RecipeReview/UserInfo';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

type TopComponentProps = {
  writer: string;
  point: number;
};

const TopComponent = ({writer, point}: TopComponentProps) => {
  return (
    <View style={styles.container}>
      <UserInfo writer={writer} point={point} />
      <FText fStyle="M_12" color={colors.b300} text={'일주일 전'} />
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
