import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NoContent from '../../components/RecipeBook/NoContent';
import {FWidth} from '../../../globalStyle';
import ListComponent from '../../components/RecipeBook/ListComponent';

const LikePage = () => {
  const [data] = useState(true);
  return (
    <View style={styles.container}>
      {!data ? (
        <NoContent title="아직 찜한 레시피가 없습니다" />
      ) : (
        <ListComponent />
      )}
    </View>
  );
};

export default LikePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },
});
