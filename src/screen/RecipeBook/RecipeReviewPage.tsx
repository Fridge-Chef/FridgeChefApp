import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';

const RecipeReviewPage = () => {
  const [data] = useState(true);
  return (
    <View style={styles.container}>
      {!data ? (
        <NoContent
          title="아직 찜한 레시피가 없습니다"
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
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },
});
