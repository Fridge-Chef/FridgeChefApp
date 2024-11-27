import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import ViewAndLike from '../MyFridge/RecRecipe/ListItem/ViewAndLike';
import FButton from '../elements/FButton';
import FText from '../elements/FText';
import FImage from '../elements/FImage';
import DetailReviewMore from '../../utils/Svg/DetailReviewMore';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RecipeListItemProps = {
  item: {
    title: string;
    id: number;
    hit: number;
    mainImageLink: string;
    star: number;
    myLike: number;
  };
  onPress: () => void;
};

const RecipeListItem = ({item, onPress}: RecipeListItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <FButton
      buttonStyle="noneStyle"
      onPress={() => navigation.navigate('reviewDetail', {itemId: item.id})}>
      <View style={styles.listContainer}>
        <FImage
          imgStyle="sub"
          borderRadius={8}
          uri={item.mainImageLink}
          alt="레시피북"
        />
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
              <DetailReviewMore />
            </FButton>
          </View>
          <View style={styles.bottomTextContainer}>
            <ViewAndLike favorites={item.hit} like={item.star} />
          </View>
        </View>
      </View>
    </FButton>
  );
};

export default RecipeListItem;

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
