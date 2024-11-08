import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, FWidth} from '../../../../../globalStyle';
import ViewAndLike from './ViewAndLike';
import LikeButton from './LikeButton';
import BottomText from './BottomText';
import FImage from '../../../elements/FImage';
import FText from '../../../elements/FText';
import {GetRecipeListType} from '../../../../type/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ListItemProps = {
  item: GetRecipeListType;
};

const ListItem = ({item}: ListItemProps) => {
  const [isLike, setIsLike] = useState(false);
  const myLike = async () => {
    if (isLike) {
      await AsyncStorage.setItem(`myLike${item.id}`, JSON.stringify(isLike));
    } else {
      await AsyncStorage.removeItem(`myLike${item.id}`);
    }
  };

  useEffect(() => {
    myLike();
  }, [isLike]);

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
            text={item.title}
          />
          <LikeButton isLike={isLike} setIsLike={setIsLike} />
        </View>
        <ViewAndLike like={item.star} favorites={item.hit} />
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
