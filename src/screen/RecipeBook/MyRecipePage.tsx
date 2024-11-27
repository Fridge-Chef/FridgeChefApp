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
import {useGetRecipeBookList} from '../../api/recipeBookQuery';
import Loading from '../../components/elements/Loading';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MyRecipePage = () => {
  const {setTitle} = useBottomSheetTitle();
  const [menuOpen, setMenuOpen] = useState<boolean | number>(false);
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useMyRecipeRankName();
  const {data, isLoading, refetch} = useGetRecipeBookList('MYRECIPE');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleRanking = () => {
    setTitle('나의레시피');
    bottomSheetRef.current?.present();
  };
  console.log('데이터', data?.content);
  if (isLoading) return <Loading loadingTitle="로딩중" />;
  return (
    <View style={styles.container}>
      {!data?.content.length ? (
        <NoContent
          marginTop={240}
          title="첫번째 레시피를 남겨보세요"
          buttonTitle="레시피 작성하기"
          onPress={() => navigation.navigate('addRecipe')}
        />
      ) : (
        <ListComponent
          data={data.content}
          onPress={handleRanking}
          name={rankName}
          renderItem={({item}) => (
            <RecipeListItem
              item={item}
              onPress={() => {
                setMenuOpen(prev => (prev === item.id ? null : item.id));
              }}
              refetch={refetch}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
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
