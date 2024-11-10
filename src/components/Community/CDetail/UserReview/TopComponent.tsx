import {StyleSheet, View} from 'react-native';
import React from 'react';
import UserInfo from '../../../MyFridge/RecipeDetail/RecipeReview/UserInfo';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import {getExpiryDateInfo} from '../../../../service/MyFridge/MyFridge';

type TopComponentProps = {
  writer: string;
  point: number;
  createdAt: string;
};

const TopComponent = ({writer, point, createdAt}: TopComponentProps) => {
  return (
    <View style={styles.container}>
      <UserInfo writer={writer} point={point} />
      <FText
        fStyle="M_12"
        color={colors.b300}
        text={getExpiryDateInfo(createdAt)}
      />
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
