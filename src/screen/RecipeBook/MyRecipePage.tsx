import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';

const MyRecipePage = () => {
  const [data] = useState(true);
  return (
    <View style={styles.container}>
      {data ? (
        <NoContent
          title="아직 나만의 레시피가 없어요."
          title2="첫번째 레시피를 남겨보세요"
          buttonTitle="나만의 레시피 작성하기"
        />
      ) : (
        <ListComponent />
      )}
    </View>
  );
};

export default React.memo(MyRecipePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: FWidth * 224,
    paddingHorizontal: FWidth * 22,
  },
});
