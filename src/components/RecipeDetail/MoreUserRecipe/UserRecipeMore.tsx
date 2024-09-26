import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyles, FWidth} from '../../../../globalStyle';
import ImageComponent from '../../elements/ImageComponent';
import ArrowRight from '../../../utils/Svg/ArrowRight';

const UserRecipeMore = () => {
  const {uri} = Image.resolveAssetSource(
    require('../../../assets/images/Frame.png'),
  );

  return (
    <View style={styles.container}>
      <ImageComponent uri={uri} imgStyle="myPage" alt="유저 이미지" />
      <View style={styles.textContainer}>
        <View style={styles.userContainer}>
          <Text style={[fontStyles.B_16, styles.textColor]}>김민영님</Text>
          <Text style={[fontStyles.M_16, styles.textColor]}>
            이 작성한 레시피입니다
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.textLine}>
            <Text style={[fontStyles.R_14, styles.textColor2]}>
              다른 레시피 더보기
            </Text>
          </View>
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
    height: FWidth * 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textColor: {
    color: colors.text,
    includeFontPadding: false,
    alignItems: 'center',
  },

  textColor2: {
    color: colors.subText,
    includeFontPadding: false,
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: FWidth * 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textLine: {
    height: FWidth * 20,
    justifyContent: 'center',
  },
});
