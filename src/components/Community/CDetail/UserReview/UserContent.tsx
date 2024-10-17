import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import FImage from '../../../elements/FImage';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import LikeButton from '../../../elements/LikeButton';

type UserContentProps = {
  uri?: string;
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
        views={views}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      />
      {uri && (
        <View style={styles.imgContainer}>
          <FImage
            uri={uri}
            imgStyle="rDetail"
            borderRadius={8}
            alt="리뷰 이미지"
          />
          <View style={styles.pageNation}>
            <FText fStyle="M_14" color={colors.black} text={'1/5'} />
          </View>
        </View>
      )}
    </>
  );
};

export default UserContent;

const styles = StyleSheet.create({
  container: {
    marginVertical: FWidth * 16,
  },

  imgContainer: {
    marginTop: FWidth * 16,
    position: 'relative',
  },

  pageNation: {
    position: 'absolute',
    right: FWidth * 20,
    bottom: FWidth * 24,
    paddingVertical: FWidth * 6,
    paddingHorizontal: FWidth * 16,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});
