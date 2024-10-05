import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import FImage from '../../../elements/FImage';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import LikeButton from '../../../elements/LikeButton';

type UserContentProps = {
  uri: string;
  content: string;
  views: number;
};

const UserContent = ({uri, content, views}: UserContentProps) => {
  const [isClicked, setIsClicked] = useState(false);
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
      <LikeButton
        isClicked={isClicked}
        like={views}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      />
      <View style={{marginTop: FWidth * 16}}>
        <FImage uri={uri} imgStyle="rDetail" alt="리뷰 이미지" />
      </View>
    </>
  );
};

export default UserContent;

const styles = StyleSheet.create({
  container: {
    marginVertical: FWidth * 16,
  },
});
