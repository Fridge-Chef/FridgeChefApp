import {Image, StyleSheet, View} from 'react-native';
import UserInfo from '../MyFridge/RecipeDetail/RecipeReview/UserInfo';
import ViewAndLike from '../MyFridge/RecRecipe/ListItem/ViewAndLike';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FImage from '../elements/FImage';
import FButton from '../elements/FButton';
import {GetMyRecipeListType} from '../../type/types';

type CListItemProps = {
  item: GetMyRecipeListType;
  onPress: () => void;
};

const CListItem = ({item, onPress}: CListItemProps) => {
  // const {uri} = Image.resolveAssetSource(item.img);

  return (
    <FButton buttonStyle="noneStyle" onPress={onPress}>
      <View style={styles.itemsContainer}>
        <FImage
          imgStyle="sub2"
          uri={item.mainImage}
          borderRadius={8}
          alt="커뮤 나만의 레시피"
        />
        <View style={styles.itemTextContainer}>
          <FText
            nLine={2}
            lineH={24}
            fStyle="M_16"
            color={colors.black}
            text={item.title}
          />
          <View style={styles.bottomTextContainer}>
            <UserInfo writer={item.userName} point={item.star} />
            <View style={{marginTop: FWidth * 8}}>
              <ViewAndLike star={item.star} favorites={item.hit} />
            </View>
          </View>
        </View>
      </View>
    </FButton>
  );
};

export default CListItem;

const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: 'row',
    marginBottom: FWidth * 14,
    padding: FWidth * 14,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },

  itemTextContainer: {
    // flex: 1,
    marginLeft: FWidth * 14,
  },

  bottomTextContainer: {
    marginTop: FWidth * 8,
  },
});
