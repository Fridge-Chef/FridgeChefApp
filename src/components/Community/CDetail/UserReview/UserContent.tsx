import {Dimensions, StyleSheet, useWindowDimensions, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FImage from '../../../elements/FImage';
import {colors, FWidth} from '../../../../../globalStyle';
import FText from '../../../elements/FText';
import LikeButton from '../../../elements/LikeButton';
import Carousel from 'react-native-reanimated-carousel';

type UserContentProps = {
  uri?: string[];
  content: string;
  views: number;
};

const UserContent = ({uri, content, views}: UserContentProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [imagesIndex, setImagesIndex] = useState(0);
  const imagesIndexRef = useRef(0);
  const {width} = useWindowDimensions();

  useEffect(() => {
    setImagesIndex(imagesIndexRef.current);
  }, [imagesIndexRef.current]);

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
      {uri?.length !== 0 && (
        <View style={styles.imgContainer}>
          <Carousel
            data={uri!}
            width={width - FWidth * 44}
            height={FWidth * 300}
            onSnapToItem={index => {
              imagesIndexRef.current = index;
              setImagesIndex(index);
            }}
            loop={true}
            renderItem={({item}: any) => (
              <FImage
                uri={item}
                imgStyle="rDetail"
                borderRadius={8}
                alt="리뷰 이미지"
              />
            )}
          />

          <View style={styles.pageNation}>
            <FText
              fStyle="M_14"
              color={colors.black}
              text={`${imagesIndex + 1}/${uri?.length}`}
            />
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
    height: FWidth * 300,
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
