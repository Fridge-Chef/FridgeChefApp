import {StyleSheet, useWindowDimensions, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FImage from '../../elements/FImage';
import {colors, FWidth} from '../../../../globalStyle';
import FText from '../../elements/FText';
import LikeButton from '../../elements/LikeButton';
import Carousel from 'react-native-reanimated-carousel';
import FModal from '../../elements/FModal';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RecipeReviewDetailType} from '../../../type/types';
import {
  useGetRecipeDetailReviewList,
  useLikeRecipeReview,
} from '../../../api/commentReviewQuery';
import {useMyRecipeReviews} from '../../../api/recipeBookQuery';

type UserContentProps = {
  data: RecipeReviewDetailType;

  refetch: () => void;
};

const UserContent = ({data, refetch}: UserContentProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {refetch: listRefetch} = useGetRecipeDetailReviewList(data.boardId);
  const [loginCheck, setLoginCheck] = useState(false);
  const {refetch: myRecipeReviews} = useMyRecipeReviews();
  const {mutate} = useLikeRecipeReview();
  const [imagesIndex, setImagesIndex] = useState(0);
  const {width} = useWindowDimensions();

  return (
    <>
      <View style={styles.container}>
        <FText
          flexShrink={1}
          fStyle="R_16"
          lineH={FWidth * 24}
          color={colors.text}
          text={data.comments}
        />
      </View>
      <LikeButton
        isClicked={data.myHit}
        views={data.hit}
        onPress={async () => {
          const token = await AsyncStorage.getItem('token');
          if (token) {
            mutate(
              {
                boardId: data.boardId,
                commentId: data.id,
              },
              {
                onSuccess: () => {
                  refetch();
                  listRefetch();
                  myRecipeReviews();
                },
              },
            );
          } else {
            setLoginCheck(true);
          }
        }}
      />
      {data.imageLink.length !== 0 && (
        <View style={styles.imgContainer}>
          <Carousel
            data={data.imageLink}
            width={width - FWidth * 44}
            height={FWidth * 300}
            onSnapToItem={index => {
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
              text={`${imagesIndex + 1}/${data.imageLink.length}`}
            />
          </View>
        </View>
      )}
      {loginCheck && (
        <FModal
          modalVisible={loginCheck}
          buttonText="로그인"
          text="로그인이 필요한 서비스입니다."
          cancel={true}
          cancelText="취소"
          cancelOnPress={() => setLoginCheck(false)}
          onPress={() => {
            navigation.navigate('serviceLogin');
            setLoginCheck(false);
          }}
        />
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
