import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import {useGetRecipeReviewDetail} from '../../../api/commentReviewQuery';
import {useUserReview} from '../../../store/store';
import {RecipeReviewDetailType} from '../../../type/types';
import Loading from '../../elements/Loading';
import TopComponent from './TopComponent';
import UserContent from './UserContent';

type RecipeType = {
  params: {
    item: RecipeReviewDetailType;
  };
};

const UserReview = () => {
  const route = useRoute<RouteProp<RecipeType>>();
  const {boardId, id} = route.params.item;
  const {data, isLoading, refetch} = useGetRecipeReviewDetail(boardId, id);

  const {setUserReview} = useUserReview();
  useEffect(() => {
    setUserReview({
      boardId: data?.boardId,
      commentId: data?.id,
      comment: data?.comments,
      myMe: data?.myMe,
      images: data?.imageLink,
      imagesFile: data?.imageLink.map(img => {
        const fileName = img.split('/').pop() || 'unknown.jpg';
        const fileType = `image/${fileName.split('.').pop()}`;
        return {uri: img, name: fileName, type: fileType};
      }),
      prevImages: data?.imageLink,
      star: data?.star,
    });
    refetch();
  }, [data]);

  if (isLoading)
    return <Loading loadingTitle="로딩중" backColor={colors.white} />;
  return (
    <>
      {data && (
        <View style={styles.container}>
          <TopComponent data={data} />
          <UserContent data={data} refetch={refetch} />
        </View>
      )}
    </>
  );
};

export default UserReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    paddingBottom: FWidth * 32,
  },
});
