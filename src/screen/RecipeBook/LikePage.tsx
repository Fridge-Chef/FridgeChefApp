import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';
import {useRecipeLikeRankName} from '../../store/rankingStore';
import ListItem from '../../components/RecipeBook/ListItem';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../store/bottomSheetStore';

const LikePage = () => {
  const {setTitle} = useBottomSheetTitle();
  const {bottomSheetRef} = useBottomSheetRef();
  const {rankName} = useRecipeLikeRankName();
  const [data] = useState(true);

  const handleRanking = () => {
    setTitle('좋아요 랭킹');
    bottomSheetRef.current?.present();
  };

  return (
    <View style={styles.container}>
      {!data ? (
        <NoContent marginTop={240} title="아직 좋아요가 없어요." />
      ) : (
        <ListComponent
          onPress={handleRanking}
          name={rankName}
          renderItem={({item}) => <ListItem item={item} onPress={() => {}} />}
        />
      )}
    </View>
  );
};

export default React.memo(LikePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
  },
});
