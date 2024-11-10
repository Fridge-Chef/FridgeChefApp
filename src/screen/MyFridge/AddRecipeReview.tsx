import {Keyboard, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {FWidth} from '../../../globalStyle';
import AddImage from '../../components/MyFridge/AddRecipeReview/AddImage';
import AddScore from '../../components/MyFridge/AddRecipeReview/AddScore';
import AddContent from '../../components/MyFridge/AddRecipeReview/AddContent';
import ImageView from '../../components/MyFridge/AddRecipeReview/ImageView';
import {useUserReview} from '../../store/store';
import {RouteProp, useRoute} from '@react-navigation/native';

type RecipeTitle = {
  params: {
    boardId: number;
    title: string;
  };
};

const AddRecipeReview = () => {
  const route = useRoute<RouteProp<RecipeTitle>>();
  const {userReview, setUserReview} = useUserReview();

  useEffect(() => {
    setUserReview({
      reviewContent: '',
      reviewImg: [],
      reviewImgFile: [],
      reviewPoint: 0,
      boardId: route.params.boardId,
    });
  }, []);

  return (
    <>
      <ScrollView>
        <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
          <View style={styles.topContainer}>
            <AddScore title={route.params.title} />
            <AddContent />
            {userReview.reviewImg.length > 0 &&
              userReview.reviewImg.map((img, index) => (
                <ImageView
                  key={index}
                  uri={img}
                  onPress={() => {
                    setUserReview({
                      reviewImg: [
                        ...userReview.reviewImg.slice(0, index),
                        ...userReview.reviewImg.slice(index + 1),
                      ],
                      reviewImgFile: [
                        ...userReview.reviewImgFile!.slice(0, index),
                        ...userReview.reviewImgFile!.slice(index + 1),
                      ],
                    });
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
