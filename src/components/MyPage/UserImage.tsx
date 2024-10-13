import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FImage from '../elements/FImage';
import MyOptionIcon from '../../utils/Svg/MyOptionIcon';
import {colors, FWidth} from '../../../globalStyle';

type UserImage = {
  uri: any;
};

const UserImage = ({uri}: UserImage) => {
  return (
    <View style={styles.container}>
      <FImage
        uri={uri}
        imgStyle="myPage"
        resizeMode="stretch"
        alt="유저 이미지"
      />
      <View style={styles.iconContainer}>
        <MyOptionIcon />
      </View>
    </View>
  );
};

export default UserImage;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  iconContainer: {
    position: 'absolute',
    width: FWidth * 28,
    bottom: FWidth * -5,
    right: FWidth * -8,
    height: FWidth * 28,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    elevation: 3,
  },
});
