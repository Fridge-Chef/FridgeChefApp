import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, FWidth} from '../../../globalStyle';
import RecipeBookClose from '../../utils/Svg/RecipeBookClose';
import FButton from '../elements/FButton';
import FImage from '../elements/FImage';
import FText from '../elements/FText';
import ViewAndLike from '../MyFridge/RecRecipe/ListItem/ViewAndLike';

type ListItemProps = {
  item: {
    id: number;
    title: string;
    mainImageLink: string;
    star: number;
    hit: number;
  };
  onPress: () => void;
};

const ListItem = ({item, onPress}: ListItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <FButton
      buttonStyle="noneStyle"
      onPress={() => navigation.navigate('reviewDetail', {itemId: item.id})}>
      <View style={styles.listContainer}>
        <FImage imgStyle="sub" borderRadius={8} uri={item.mainImageLink} />
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
            <ViewAndLike favorites={item.hit} star={item.star} />
          </View>
        </View>
      </View>
    </FButton>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    marginBottom: FWidth * 12,
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
