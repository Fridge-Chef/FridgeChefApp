import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import ViewAndLike from '../MyFridge/RecRecipe/ListItem/ViewAndLike';
import FButton from '../elements/FButton';
import FText from '../elements/FText';
import FImage from '../elements/FImage';
import DetailReviewMore from '../../utils/Svg/DetailReviewMore';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AppBarMenu from '../elements/AppBarMenu';
import DeleteModal from '../elements/Modals/DeleteModal';
import {
  useDeleteMyRecipe,
  useGetRecipeBookList,
} from '../../api/recipeBookQuery';
import {useGetRecipeList} from '../../api/recipeQuery';
import {useUserBoardCount} from '../../api/userQuery';

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
  menuOpen: boolean | number;
  navigation: NativeStackNavigationProp<ParamListBase>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | number>>;
  refetch: () => void;
};

const RecipeListItem = ({
  item,
  onPress,
  menuOpen,
  navigation,
  setMenuOpen,
  refetch,
}: RecipeListItemProps) => {
  const [modalCheck, setModalCheck] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(true);
  const {mutate} = useDeleteMyRecipe();
  const {refetch: userDataCount} = useUserBoardCount();
  const {refetch: CommunityList} = useGetRecipeList();
  const handleClose = () => {
    setMenuOpen(null!);
    setModalCheck(false);
    userDataCount();
    refetch();
    CommunityList();
  };

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
        {menuOpen === item.id && (
          <View style={styles.menuContainer}>
            <AppBarMenu
              id={item.id}
              updateOnPress={() => {
                setMenuOpen(null!);
                navigation.navigate('addRecipe', {
                  boardId: item.id,
                  type: 'update',
                });
              }}
              deleteOnPress={() => setModalCheck(true)}
            />
          </View>
        )}
      </View>
      <DeleteModal
        modalCheck={modalCheck}
        onPress={() =>
          deleteCheck
            ? mutate(item.id, {
                onSuccess: () => {
                  setDeleteCheck(false);
                },
              })
            : handleClose()
        }
        deleteCheck={deleteCheck}
        cancelOnPress={() => {
          setMenuOpen(null!);
          setModalCheck(false);
        }}
      />
    </FButton>
  );
};

export default RecipeListItem;

const styles = StyleSheet.create({
  listContainer: {
    position: 'relative',
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

  menuContainer: {
    zIndex: 10,
    right: FWidth * 40,
    top: FWidth * -10,
    position: 'absolute',
  },
});
