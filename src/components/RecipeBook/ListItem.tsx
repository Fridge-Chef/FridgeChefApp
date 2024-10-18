import {StyleSheet, View} from 'react-native';
import React from 'react';
import ViewAndLike from '../MyFridge/RecRecipe/ListItem/ViewAndLike';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FImage from '../elements/FImage';
import RecipeBookClose from '../../utils/Svg/RecipeBookClose';
import FButton from '../elements/FButton';

type ListItemProps = {
  item: {
    title: string;
    likes: number;
    favorites: number;
    myLike: number;
    ingredients: string[];
  };
  onPress: () => void;
};

const ListItem = ({item, onPress}: ListItemProps) => {
  return (
    <View style={styles.listContainer}>
      <FImage imgStyle="sub" borderRadius={8} uri="" alt="레시피북" />
      <View style={[styles.textContainerAlign]}>
        <View style={[styles.titleContainer]}>
          <FText
            flexShrink={1}
            nLine={2}
            fStyle="B_16"
            lineH={FWidth * 22.5}
            color={colors.text}
            text={item.title}
          />
          <FButton buttonStyle="noneStyle" onPress={onPress}>
            <RecipeBookClose />
          </FButton>
        </View>
        <View style={styles.bottomTextContainer}>
          <ViewAndLike favorites={item.favorites} like={item.likes} />
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
    marginTop: FWidth * 8,
  },

  textAndIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: FWidth * 8,
  },
});
