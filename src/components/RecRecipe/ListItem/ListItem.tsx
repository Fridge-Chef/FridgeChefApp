import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FButton from '../../elements/FButton';
import {colors, FHeight, fontFamilies, FWidth} from '../../../../globalStyle';
import ImageComponent from './ImageComponent';
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
      <ImageComponent />
      <View style={styles.itemTextContainer}>
        <View style={styles.mainTitleAndLikeIcon}>
          <View>
            <Text style={styles.itemTitleText}>{item.title}</Text>
            <ViewAndLike like={item.likes} favorites={item.favorites} />
          </View>
          <LikeButton isLike={isLike} setIsLike={setIsLike} />
        </View>
        <BottomText ingredients={item.ingredients} />
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  mainItemContainer: {
    padding: FWidth * 16,
    flexDirection: 'row',
    borderColor: '#AFB1B6',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: FHeight * 8,
  },

  itemTextContainer: {
    flex: 1,
    marginLeft: FWidth * 12,
    justifyContent: 'space-between',
  },

  mainTitleAndLikeIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemTitleText: {
    color: colors.black,
    fontFamily: fontFamilies.pretendardMedium,
    fontSize: 16,
    lineHeight: FHeight * 22,
  },
});
