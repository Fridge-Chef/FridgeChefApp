import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {FWidth} from '../../../globalStyle';
import AddImage from '../../components/MyFridge/AddRecipeReview/AddImage';
import AddScore from '../../components/MyFridge/AddRecipeReview/AddScore';
import AddContent from '../../components/MyFridge/AddRecipeReview/AddContent';
import ImageView from '../../components/MyFridge/AddRecipeReview/ImageView';
import {useUserReview} from '../../store/store';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RecipeReviewDetailType} from '../../type/types';

type RecipeTitle = {
  params: {
    boardId: number;
    title: string;
    type: string;
    review?: RecipeReviewDetailType;
  };
};

const AddRecipeReview = () => {
  const route = useRoute<RouteProp<RecipeTitle>>();
  const item = route.params.review;
  const {userReview, setUserReview} = useUserReview();
  console.log('리뷰 체크', item);
  useEffect(() => {
    if (item) {
      setUserReview({
        type: route.params.type,
        commentId: item.id,
        comment: item.comments,
        prevImages: item.imageLink,
        images: item.imageLink,
        imagesFile: item.imageLink.map(img => {
          const fileName = img.split('/').pop() || 'unknown.jpg';
          const fileType = `image/${fileName.split('.').pop()}`;
          return {uri: img, name: fileName, type: fileType};
        }),
        star: item.star,
        boardId: item.boardId,
      });
    } else {
      setUserReview({
        type: '',
        commentId: 0,
        comment: '',
        images: [],
        imagesFile: [],
        star: 0,
        boardId: route.params.boardId,
      });
    }
  }, []);

  return (
    <>
      <ScrollView>
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
          <View style={styles.topContainer}>
            <AddScore title={route.params.title} />
            <AddContent />
            {userReview.images!.length > 0 &&
              userReview.images!.map((img, index) => (
                <ImageView
                  key={index}
                  uri={img}
                  onPress={() => {
                    setUserReview({
                      images: [
                        ...userReview.images!.slice(0, index),
                        ...userReview.images!.slice(index + 1),
                      ],
                      imagesFile: [
                        ...userReview.imagesFile!.slice(0, index),
                        ...userReview.imagesFile!.slice(index + 1),
                      ],
                    });
                    console.log('이미지 체크', userReview);
                  }}
                />
              ))}
          </View>
        </Pressable>
      </ScrollView>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <AddImage />
      </Pressable>
    </>
  );
};

export default AddRecipeReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 24,
    paddingBottom: FWidth * 47,
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingHorizontal: FWidth * 22,
  },
});
