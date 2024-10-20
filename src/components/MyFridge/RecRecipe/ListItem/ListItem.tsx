import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ViewAndLike from './ViewAndLike';
import LikeButton from './LikeButton';
import BottomText from './BottomText';
import FImage from '../../../elements/FImage';
import FText from '../../../elements/FText';
import {RecipeListType} from '../../../../type/types';

type ListItemProps = {
  item: RecipeListType;
};

const ListItem = ({item}: ListItemProps) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <View style={styles.container}>
      <FImage
        imgStyle="main"
        borderRadius={8}
        uri={item.mainImage}
        alt="메인 리스트"
      />
      <View style={styles.itemTextContainer}>
        <View style={styles.itemTitleAndLikeContainer}>
          <FText
            nLine={2}
            flexShrink={1}
            fStyle="M_16"
            lineH={FWidth * 22.5}
            color={colors.text}
            text={item.name}
          />
          <LikeButton isLike={isLike} setIsLike={setIsLike} />
        </View>
        <ViewAndLike like={item.likes} favorites={item.favorites} />
        <BottomText recipeIngredients={item.recipeIngredients} />
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
    marginTop: FWidth * 12,
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
