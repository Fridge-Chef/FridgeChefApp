import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../globalStyle';
import {RouteProp, useRoute} from '@react-navigation/native';
import TitleComponent from '../../components/MyFridge/RecipeDetail/TitleComponent/TitleComponent';
import IngredientComponent from '../../components/MyFridge/RecipeDetail/IngredientComponent/IngredientComponent';
import RecipeComponent from '../../components/MyFridge/RecipeDetail/RecipeComponent/RecipeComponent';
import RecipeReview from '../../components/MyFridge/RecipeDetail/RecipeReview/RecipeReview';
import FImage from '../../components/elements/FImage';
import Badge from '../../components/MyFridge/RecipeDetail/Badge';
import RecipeNote from '../../components/MyFridge/RecipeDetail/RecipeNote/RecipeNote';

import {useGetRecipeDetail} from '../../api/recipeQuery';
import Loading from '../../components/elements/Loading';
import {useScrollY} from '../../store/utillStore';
import {
  useUserDetail,
  useUsernameCheck,
  useUserReview,
} from '../../store/store';
import FastImage from '@d11/react-native-fast-image';

type DetailItem = {
  params: {
    id: number;
    without: string[];
    myIngredients: string[];
  };
};

const RecipeDetail = () => {
  const route = useRoute<RouteProp<DetailItem>>();
  const items = route.params;
  const [menuOpen, setMenuOpen] = useState<boolean | number>(false);
  const {setScrollY} = useScrollY();
  const {data, isLoading} = useGetRecipeDetail(items.id);
  const {setUsernameCheck} = useUsernameCheck();
  const {setUserDetail} = useUserDetail();
  useEffect(() => {
    if (data) {
      setUsernameCheck(data?.username);
    }
  }, [data]);

  useEffect(() => {
    if (items?.id) {
      setUserDetail({
        boardId: data?.boardId,
        myMe: data?.myMe,
        title: data?.title,
        comment: data?.description,
      });
    }
  }, [data]);

  if (isLoading)
    return <Loading loadingTitle="로딩중" backColor={colors.white} />;
  return (
    <ScrollView
      style={styles.container}
      overScrollMode="never"
      onScroll={e => setScrollY(e.nativeEvent.contentOffset.y)}>
      <Pressable onPress={() => setMenuOpen(false)}>
        <View style={{position: 'relative'}}>
          <FImage
            imgStyle="detail"
            uri={data!.mainImage}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <Badge />
        </View>
        <TitleComponent detailData={data!} items={items} />
        <RecipeNote content={data!.description} />
        <IngredientComponent recipeIngredients={data!.recipeIngredients} />
        <RecipeComponent instructions={data!.instructions} />
        <RecipeReview
          title={data!.title}
          boardId={data!.boardId}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </Pressable>
    </ScrollView>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
});
