import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import MyOptionIcon from '../../utils/Svg/MyOptionIcon';
import FButton from '../elements/FButton';
import FImage from '../elements/FImage';

type UserImage = {
  uri: string;
  onPress: () => void;
};

const UserImage = ({uri, onPress}: UserImage) => {
  console.log('유저 이미지', uri);
  return (
    <View style={styles.container}>
      <FImage uri={uri} imgStyle="myPage" borderRadius={100} />
      <FButton
        buttonStyle="noneStyle"
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        fBStyle={styles.iconContainer}
        onPress={onPress}>
        <MyOptionIcon />
      </FButton>
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
