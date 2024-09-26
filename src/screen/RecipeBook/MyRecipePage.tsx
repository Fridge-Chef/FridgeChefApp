import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';

const MyRecipePage = () => {
  const [data] = useState(true);
  return (
    <View style={styles.container}>
      {!data ? (
        <NoContent
          title="아직 작성된 나의 레시피가 없습니다"
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
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },
});
