import {Pressable, StyleSheet} from 'react-native';
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
import {useGetRecipeBookList} from '../../api/recipeBookQuery';
import Loading from '../../components/elements/Loading';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MyRecipePage = () => {
  const {setTitle} = useBottomSheetTitle();
  const [menuOpen, setMenuOpen] = useState<boolean | number>(false);
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useMyRecipeRankName();
  const rankingName = () => {
    switch (rankName) {
      case '최신순':
        return 'LATEST';
      case '별점순':
        return 'RATING';
      case '좋아요순':
        return 'HIT';
      default:
        return 'LATEST';
    }
  };
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetRecipeBookList('MYRECIPE', 10, rankingName());
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleRanking = () => {
    setTitle('나의레시피');
    bottomSheetRef.current?.present();
  };

  if (isLoading) return <Loading loadingTitle="로딩중" />;
  const newData = data?.pages.map(page => page.content).flat();

  return (
    <Pressable style={styles.container} onPress={() => setMenuOpen(null!)}>
      {!newData?.length ? (
        <NoContent
          marginTop={240}
          title="첫번째 레시피를 남겨보세요"
          buttonTitle="레시피 작성하기"
          onPress={() => navigation.navigate('addRecipe')}
        />
      ) : (
        <ListComponent
          data={newData}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onPress={handleRanking}
          name={rankName}
          renderItem={({item}) => (
            <RecipeListItem
              item={item}
              onPress={() => {
                setMenuOpen(prev => (prev === item.id ? null : item.id));
              }}
              refetch={refetch}
              navigation={navigation}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          )}
        />
      )}
    </Pressable>
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
