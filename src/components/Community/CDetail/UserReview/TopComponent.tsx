import {StyleSheet, View} from 'react-native';
import React from 'react';
import FImage from '../../../elements/FImage';
import FText from '../../../elements/FText';
import ArrowRight2 from '../../../../utils/Svg/ArrowRight2';
import UserInfo from '../../../RecipeDetail/RecipeReview/UserInfo';
import {colors, FWidth} from '../../../../../globalStyle';

type TopComponentProps = {
  uri: string;
  title: string;
  writer: string;
  point: number;
};

const TopComponent = ({uri, title, writer, point}: TopComponentProps) => {
  return (
    <View style={styles.container}>
      <FImage uri={uri} imgStyle="sub" alt="리뷰 디테일" />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <FText
            mRight={FWidth * 4}
            fStyle="B_16"
            color={colors.text}
            text={title}
          />
          <ArrowRight2 />
        </View>
        <View style={styles.userContainer}>
          <UserInfo name={writer} point={point} />
        </View>
      </View>
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  textContainer: {
    marginLeft: FWidth * 16,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userContainer: {
    marginTop: FWidth * 12,
  },
});
