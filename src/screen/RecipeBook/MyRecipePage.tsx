import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';
import {useMyRecipeRankName} from '../../store/rankingStore';
import RecipeListItem from '../../components/RecipeBook/RecipeListItem';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../store/bottomSheetStore';
import {useGetRecipeMyRecipeList} from '../../api/recipeBookQuery';
import Loading from '../../components/elements/Loading';

const MyRecipePage = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useMyRecipeRankName();
  const {data, isLoading, refetch} = useGetRecipeMyRecipeList();

  const handleRanking = () => {
    setTitle('나의레시피');
    bottomSheetRef.current?.present();
  };
  if (isLoading) return <Loading loadingTitle="로딩중" />;
  return (
    <View style={styles.container}>
      {!data?.content ? (
        <NoContent
          marginTop={240}
          title="첫번째 레시피를 남겨보세요"
          buttonTitle="레시피 작성하기"
        />
      ) : (
        <ListComponent
          data={data.content}
          onPress={handleRanking}
          name={rankName}
          renderItem={({item}) => (
            <RecipeListItem
              item={item}
              onPress={() => console.log('모어 버튼', item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

export default React.memo(MyRecipePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
  },
});
