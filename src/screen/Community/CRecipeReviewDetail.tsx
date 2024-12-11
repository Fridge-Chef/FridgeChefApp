import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors} from '../../../globalStyle';
import FImage from '../../components/elements/FImage';
import PreviewTitle from '../../components/Community/AddRecipe/Preview/PreviewTitle';
import RecipeNote from '../../components/MyFridge/RecipeDetail/RecipeNote/RecipeNote';
import IngredientComponent from '../../components/MyFridge/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/MyFridge/RecipeDetail/RecipeComponent/RecipeComponent';
import {useGetRecipeDetail} from '../../api/recipeQuery';
import Loading from '../../components/elements/Loading';
import {useRecipeId, useUserDetail, useUsernameCheck} from '../../store/store';

type CRecipeReviews = {
  params: {
    itemId: number;
  };
};

const CRecipeReviewDetail = () => {
  const recipeId = useRoute<RouteProp<CRecipeReviews>>();
  const {itemId} = recipeId.params;
  const {data, isLoading} = useGetRecipeDetail(itemId);
  const {setUserDetail} = useUserDetail();
  const {setRecipeId} = useRecipeId();
  useEffect(() => {
    if (data) {
      setUserDetail({
        boardId: data?.boardId,
        myMe: data?.myMe,
      });
      setRecipeId(itemId);
    }
  }, [data]);

  if (isLoading) return <Loading loadingTitle="검색중" />;
  if (data)
    return (
      <ScrollView style={styles.container} overScrollMode="never">
        <View>
          <FImage uri={data.mainImage} imgStyle="detail" alt="디테일 메인" />
        </View>
        <PreviewTitle
          title={data.title}
          username={data.username}
          dishCategory={data.dishCategory}
          dishTime={data.dishTime}
          dishLevel={data.dishLevel}
        />
        <RecipeNote content={data.description} />
        <IngredientComponent recipeIngredients={data.recipeIngredients} />
        <RecipeComponent instructions={data.instructions} />
        {/* <PCloseButton /> */}
      </ScrollView>
    );
};

export default CRecipeReviewDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
