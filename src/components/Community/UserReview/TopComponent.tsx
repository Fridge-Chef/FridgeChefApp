import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../../globalStyle';
import {getExpiryDateInfo} from '../../../service/MyFridge/MyFridge';
import {RecipeReviewDetailType} from '../../../type/types';
import FText from '../../elements/FText';
import UserInfo from '../../MyFridge/RecipeDetail/RecipeReview/UserInfo';

type TopComponentProps = {
  data: RecipeReviewDetailType;
};

const TopComponent = ({data}: TopComponentProps) => {
  return (
    <View style={styles.container}>
      <UserInfo writer={data.userName} point={data.star} />
      <FText
        fStyle="M_12"
        color={colors.b300}
        text={getExpiryDateInfo(data.createdAt)}
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
