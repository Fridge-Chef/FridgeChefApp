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
import {useGetRecipeReviewDetail} from '../../api/commentReviewQuery';
import Loading from '../../components/elements/Loading';

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
  const {data} = useGetRecipeReviewDetail(item?.boardId, item?.id);

  useEffect(() => {
    if (item?.id) {
      setUserReview({
        type: route.params.type,
        commentId: data?.id,
        comment: data?.comments,
        prevImages: data?.imageLink,
        images: data?.imageLink || [],
        imagesFile:
          data?.imageLink.map(img => {
            const fileName = img.split('/').pop() || 'unknown.jpg';
            const fileType = `image/${fileName.split('.').pop()}`;
            return {uri: img, name: fileName, type: fileType};
          }) || [],
        star: data?.star,
        boardId: data?.boardId,
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
  }, [data]);

  const handleImageRemove = (index: number) => {
    const updatedImages = [...userReview.images!];
    const updatedImagesFile = [...userReview.imagesFile!];
    updatedImages.splice(index, 1);
    updatedImagesFile.splice(index, 1);
    setUserReview({
      ...userReview,
      images: updatedImages,
      imagesFile: updatedImagesFile,
    });
  };

  return (
    <>
      <ScrollView>
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
          <View style={styles.topContainer}>
            <AddScore title={route.params.title} />
            <AddContent />
            {Array.isArray(userReview?.images) &&
              userReview.images.length > 0 &&
              userReview.images.map((img, index) => (
                <ImageView
                  key={index}
                  uri={img}
                  onPress={() => handleImageRemove(index)}
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
