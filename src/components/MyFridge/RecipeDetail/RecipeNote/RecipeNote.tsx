import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import SubTitleComponent from '../SubTitleComponent';
import NoteContent from './NoteContent';

const RecipeNote = () => {
  const content =
    '"요즘 다이어트 중이라 닭가슴살만 먹는 게 너무 지겨워서 뭔가 색다른 요리가 없을까 고민하다가 만든 김치죽이에요. 매번 닭가슴살만 먹으니 맛이 심심했는데, 김치를 넣으니 매콤하면서도 속이 편하고 든든하더라고요. 추운 날씨에 따뜻하게 먹기 딱 좋은 요리라서 자주 해먹게 되네요. 몸도 챙기고 입도 즐거운 한 끼로 추천해요!"';

  return (
    <View style={styles.container}>
      <SubTitleComponent title="레시피 노트" />
      <NoteContent content={content} />
    </View>
  );
};

export default RecipeNote;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 12,
    paddingVertical: FWidth * 24,
    paddingHorizontal: FWidth * 22,
    backgroundColor: colors.white,
  },
});
