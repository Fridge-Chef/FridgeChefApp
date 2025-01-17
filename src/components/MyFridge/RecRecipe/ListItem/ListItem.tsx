import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ViewAndLike from './ViewAndLike';
import LikeButton from './LikeButton';
import BottomText from './BottomText';
import FImage from '../../../elements/FImage';
import FText from '../../../elements/FText';
import {GetRecipeListType} from '../../../../type/types';
import {useAddLikeRecipe} from '../../../../api/recipeQuery';
import {useGetRecipeBookList} from '../../../../api/recipeBookQuery';

type ListItemProps = {
  item: GetRecipeListType;
  refetch: () => void;
};

const ListItem = ({item, refetch}: ListItemProps) => {
  const {mutate} = useAddLikeRecipe();
  const {refetch: bookRefetch} = useGetRecipeBookList('HIT');

  return (
    <View style={styles.container}>
      <FImage imgStyle="main" borderRadius={8} uri={item.mainImage} />
      <View style={styles.itemTextContainer}>
        <View style={styles.itemTitleAndLikeContainer}>
          <FText
            nLine={2}
            flexShrink={1}
            fStyle="M_16"
            lineH={FWidth * 22.5}
            color={colors.text}
            text={item.title}
          />
          <LikeButton
            isLike={item.myHit}
            onPress={() =>
              mutate(item.id, {
                onSuccess: () => {
                  bookRefetch();
                  refetch();
                },
              })
            }
          />
        </View>
        <ViewAndLike star={item.star} favorites={item.hit} />
        <BottomText recipeIngredients={item.without} have={item.have} />
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    padding: FWidth * 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: FWidth * 12,
  },

  itemTextContainer: {
    flex: 1,
    marginLeft: FWidth * 14,
  },

  itemTitleAndLikeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: FWidth * 8,
  },
});
