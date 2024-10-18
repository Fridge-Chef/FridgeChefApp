import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import MyReview from '../../components/RecipeBook/MyReview/MyReview';

const RecipeReviewPage = () => {
  const [data] = useState(true);
  return (
    <View style={styles.container}>
      {!data ? (
        <NoContent
          marginTop={240}
          title="첫번째 후기를 남겨보세요"
          buttonTitle="후기 작성하기"
        />
      ) : (
        <MyReview />
      )}
    </View>
  );
};

export default React.memo(RecipeReviewPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: FWidth * 22,
  },
});
