import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import {useMyRecipeRankName} from '../../store/rankingStore';
import RecipeListItem from '../../components/RecipeBook/RecipeListItem';

const MyRecipePage = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useMyRecipeRankName();
  const [data] = useState(true);

  const handleRanking = () => {
    setTitle('나의레시피');
    bottomSheetRef.current?.present();
  };
  return (
    <View style={styles.container}>
      {!data ? (
        <NoContent
          marginTop={240}
          title="첫번째 레시피를 남겨보세요"
          buttonTitle="레시피 작성하기"
        />
      ) : (
        <ListComponent
          onPress={handleRanking}
          name={rankName}
          renderItem={({item}) => (
            <RecipeListItem item={item} onPress={() => {}} />
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
