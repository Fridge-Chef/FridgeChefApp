import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import FAppBar from '../../elements/FAppBar';
import AppBarMenu from '../../elements/AppBarMenu';
import {FWidth} from '../../../../globalStyle';
import {useScrollY} from '../../../store/utillStore';
import {useUserDetail, useUserReview} from '../../../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DeleteModal from '../../elements/Modals/DeleteModal';
import {
  useDeleteMyRecipe,
  useGetRecipeBookList,
} from '../../../api/recipeBookQuery';
import {useGetRecommendedRecipeList} from '../../../api/recipeQuery';
import {Share} from 'react-native';
const RecipeDetailAppBar = () => {
  const [deleteCheck, setDeleteCheck] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const {scrollY} = useScrollY();
  const {userDetail} = useUserDetail();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {mutate} = useDeleteMyRecipe();
  const {refetch} = useGetRecipeBookList('MYRECIPE');
  const {refetch: recipeList} = useGetRecommendedRecipeList([]);
  const handleClose = () => {
    setDeleteModal(false);
    refetch();
    recipeList();
    navigation.goBack();
  };

  return (
    <View style={{position: 'relative'}}>
      <FAppBar
        type="detailBack"
        rightOn={true}
        rType1="detailHeart"
        rType2="detailShare"
        rType3={userDetail.myMe ? 'detailReviewMore' : null}
        onPress1={() => {}}
        onPress2={async () => {
          Share.share({message: 'test', title: '타이틀', url: ''});
        }}
        shadow
        elevation={scrollY > 0 ? 5 : 0}
        onPress3={() => setIsClicked(!isClicked)}
      />
      {isClicked && (
        <View style={styles.menuContainer}>
          <AppBarMenu
            id={1}
            updateOnPress={() => {
              setIsClicked(false);
              navigation.navigate('addRecipe', {
                boardId: userDetail.boardId,
                type: 'update',
              });
            }}
            deleteOnPress={() => {
              setDeleteModal(true);
              setIsClicked(false);
            }}
          />
        </View>
      )}
      <DeleteModal
        modalCheck={deleteModal}
        deleteCheck={deleteCheck}
        onPress={() =>
          deleteCheck
            ? mutate(userDetail.boardId, {
                onSuccess: () => {
                  setDeleteCheck(false);
                },
              })
            : handleClose()
        }
        cancelOnPress={() => {
          setDeleteModal(false);
        }}
      />
    </View>
  );
};

export default RecipeDetailAppBar;

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    right: 22,
    top: FWidth * 60,
  },
});
