import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {colors, FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';

const LikePage = () => {
  const [data] = useState(true);
  return (
    <View style={styles.container}>
      {!data ? (
        <NoContent
          marginTop={242}
          title="아직 찜하기가 없어요."
          title2="남겨남겨"
        />
      ) : (
        <ListComponent />
      )}
    </View>
  );
};

export default React.memo(LikePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },
});
