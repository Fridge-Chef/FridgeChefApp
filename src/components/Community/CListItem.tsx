import {Image, StyleSheet, View} from 'react-native';
import UserInfo from '../RecipeDetail/RecipeReview/UserInfo';
import ViewAndLike from '../RecRecipe/ListItem/ViewAndLike';
import {colors, FWidth} from '../../../globalStyle';
import FText from '../elements/FText';
import FImage from '../elements/FImage';
import FButton from '../elements/FButton';

type CListItemProps = {
  item: {
    id: number;
    title: string;
    writer: string;
    point: number;
    likes: number;
    views: number;
    img: any;
  };
  onPress: () => void;
};

const CListItem = ({item, onPress}: CListItemProps) => {
  const {uri} = Image.resolveAssetSource(item.img);

  return (
    <FButton buttonStyle="noneStyle" onPress={onPress}>
      <View style={styles.itemsContainer}>
        <FImage imgStyle="sub2" uri={uri} alt="커뮤 나만의 레시피" />
        <View style={styles.itemTextContainer}>
          <FText
            nLine={2}
            lineH={24}
            fStyle="B_16"
            color={colors.text}
            text={item.title}
          />
          <View style={styles.bottomTextContainer}>
            <UserInfo name={item.writer} point={item.point} />
            <View style={{marginTop: FWidth * 8}}>
              <ViewAndLike like={item.likes} favorites={item.views} />
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
    marginTop: FWidth * 12,
    padding: FWidth * 14,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
  },

  itemTextContainer: {
    flex: 1,
    marginLeft: FWidth * 14,
  },

  bottomTextContainer: {
    marginTop: FWidth * 8,
  },
});
