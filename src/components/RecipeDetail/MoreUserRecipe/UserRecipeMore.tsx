import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import ArrowRight from '../../../utils/Svg/ArrowRight';
import FText from '../../elements/FText';
import FImage from '../../elements/FImage';

const UserRecipeMore = () => {
  const {uri} = Image.resolveAssetSource(
    require('../../../assets/images/Frame.png'),
  );

  return (
    <View style={styles.container}>
      <FImage uri={uri} imgStyle="myPage" alt="유저 이미지" />
      <View style={styles.textContainer}>
        <View style={styles.userContainer}>
          <FText fStyle="B_16" color={colors.text} text="김민영님" />
          <FText
            fStyle="M_16"
            color={colors.text}
            text="이 작성한 레시피입니다"
          />
        </View>
        <View style={styles.buttonContainer}>
          <FText
            fStyle="R_14"
            color={colors.subText}
            text="다른 레시피 더보기"
          />
          <ArrowRight />
        </View>
      </View>
    </View>
  );
};

export default UserRecipeMore;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: FWidth * 32,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border2,
    backgroundColor: colors.background3,
    paddingVertical: FWidth * 18,
    paddingLeft: FWidth * 24,
  },

  textContainer: {
    marginLeft: FWidth * 20,
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: FWidth * 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
