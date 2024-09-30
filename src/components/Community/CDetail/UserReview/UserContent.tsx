import {StyleSheet, View} from 'react-native';
import React from 'react';
import FImage from '../../../elements/FImage';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';

type UserContentProps = {
  uri: string;
  content: string;
};

const UserContent = ({uri, content}: UserContentProps) => {
  return (
    <>
      <View style={styles.container}>
        <FText
          flexShrink={1}
          fStyle="R_16"
          lineH={FWidth * 24}
          color={colors.text}
          text={content}
        />
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
