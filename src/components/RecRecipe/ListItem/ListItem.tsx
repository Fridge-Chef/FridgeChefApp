import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import ViewAndLike from './ViewAndLike';
import LikeButton from './LikeButton';
import BottomText from './BottomText';
import FImage from '../../elements/FImage';
import FText from '../../elements/FText';

type ListItemProps = {
  item: {
    title: string;
    likes: number;
    favorites: number;
    ingredients: string[];
  };
};

const ListItem = ({item}: ListItemProps) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <View style={styles.mainItemContainer}>
      <FImage imgStyle="main" uri="" alt="메인 리스트" />
      <View style={styles.itemTextContainer}>
        <View style={styles.itemTitleAndLikeContainer}>
          <FText
            nLine={2}
            fStyle="B_16"
            lineH={FWidth * 22.5}
            color={colors.text}
            text={item.title}
          />
          <LikeButton isLike={isLike} setIsLike={setIsLike} />
        </View>
        <ViewAndLike like={item.likes} favorites={item.favorites} />
        <BottomText ingredients={item.ingredients} />
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  mainItemContainer: {
    padding: FWidth * 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 14,
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
    marginBottom: FWidth * 2,
  },
});
