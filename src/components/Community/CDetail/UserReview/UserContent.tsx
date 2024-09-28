import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FImage from '../../../elements/FImage';
import {colors, fontStyles, FWidth} from '../../../../../globalStyle';

type UserContentProps = {
  uri: string;
  content: string;
};

const UserContent = ({uri, content}: UserContentProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[fontStyles.R_16, {color: colors.text}]}>{content}</Text>
      </View>
      <View style={{marginTop: FWidth * 24}}>
        <FImage uri={uri} imgStyle="rDetail" alt="리뷰 이미지" />
      </View>
    </>
  );
};

export default UserContent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 24,
  },
});
