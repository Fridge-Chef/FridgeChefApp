import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';

const RecipeReviewPage = () => {
  const [data] = useState(true);
  return (
    <View style={styles.container}>
      {data ? (
        <NoContent
          title="아직 후기가 없어요!"
          title2="첫번째 후기를 남겨보세요"
          buttonTitle="레시피 후기 작성하기"
        />
      ) : (
        <ListComponent />
      )}
    </View>
  );
};

export default React.memo(RecipeReviewPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: FWidth * 224,
    paddingHorizontal: FWidth * 22,
  },
});
