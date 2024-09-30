import {StyleSheet, View} from 'react-native';
import React from 'react';
import Close from '../../utils/Svg/Close';
import ViewAndLike from '../RecRecipe/ListItem/ViewAndLike';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FImage from '../elements/FImage';
import {useTopTabBar} from '../../store/store';
import LikeIcon from '../../utils/Svg/LikeIcon';

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
  const {index} = useTopTabBar();
  return (
    <View style={styles.listContainer}>
      <FImage imgStyle="sub" uri="" alt="레시피북" />
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
          <Close />
        </View>
        <View style={styles.bottomTextContainer}>
          {index !== 2 ? (
            <ViewAndLike favorites={item.favorites} like={item.likes} />
          ) : (
            <View style={styles.textAndIconContainer}>
              <LikeIcon />
              <FText
                mLeft={FWidth * 4}
                fStyle="B_12"
                color={colors.b500}
                text={item.myLike}
              />
            </View>
          )}
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
