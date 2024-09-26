import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageComponent from '../elements/ImageComponent';
import Close from '../../utils/Svg/Close';
import ViewAndLike from '../RecRecipe/ListItem/ViewAndLike';
import {colors, fontStyles, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';

type ListItemProps = {
  item: {
    title: string;
    likes: number;
    favorites: number;
    myLike: number;
    ingredients: string[];
  };
};

const ListItem = ({item}: ListItemProps) => {
  return (
    <View style={styles.listContainer}>
      <ImageComponent imgStyle="sub" uri="" alt="레시피북" />
      <View style={[styles.textContainerAlign]}>
        <View style={[styles.titleContainer]}>
          <FText
            nLine={2}
            fStyle="B_16"
            lineH={FWidth * 22.5}
            color={colors.text}
            text={item.title}
          />
          <Close />
        </View>
        <View style={styles.bottomTextContainer}>
          <ViewAndLike
            favorites={item.favorites}
            like={item.likes}
            myLike={item.myLike}
          />
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    marginTop: FWidth * 12,
    borderRadius: 12,
    padding: FWidth * 14,
    borderWidth: 1,
    borderColor: colors.border,
  },

  textContainerAlign: {
    flex: 1,
    marginLeft: FWidth * 14,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomTextContainer: {
    flexDirection: 'row',
    marginTop: FWidth * 16,
  },
});
