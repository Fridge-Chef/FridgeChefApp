import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  colors,
  FHeight,
  fontFamilies,
  fontStyles,
  FWidth,
} from '../../../../globalStyle';
import ImageComponent from '../../elements/ImageComponent';
import ViewAndLike from './ViewAndLike';
import LikeButton from './LikeButton';
import BottomText from './BottomText';

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
      <ImageComponent imgStyle="main" url="" alt="메인 리스트" />
      <View style={styles.itemTextContainer}>
        <View style={styles.itemTitleAndLikeContainer}>
          <Text style={[fontStyles.B_16, styles.textColor]} numberOfLines={2}>
            {item.title}
          </Text>
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
    // marginBottom: FWidth * 2,
  },

  textColor: {
    color: colors.text,
    flexShrink: 1,
  },
});
