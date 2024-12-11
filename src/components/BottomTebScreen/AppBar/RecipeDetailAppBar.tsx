import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FAppBar from '../../elements/FAppBar';
import AppBarMenu from '../../elements/AppBarMenu';
import {FWidth} from '../../../../globalStyle';
import {useScrollY} from '../../../store/utillStore';
import {useGetUser} from '../../../api/userQuery';
import {useUsernameCheck, useUserReview} from '../../../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DeleteModal from '../../elements/Modals/DeleteModal';
import {
  useDeleteMyRecipe,
  useGetRecipeBookList,
} from '../../../api/recipeBookQuery';
import {useGetRecommendedRecipeList} from '../../../api/recipeQuery';

const RecipeDetailAppBar = () => {
  const [deleteCheck, setDeleteCheck] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const {data} = useGetUser();
  const {usernameCheck} = useUsernameCheck();
  const [userChecked, setUserChecked] = useState(false);
  const {scrollY} = useScrollY();
  const {userReview} = useUserReview();
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

  useEffect(() => {
    if (data && usernameCheck) {
      setUserChecked(data?.user.username === usernameCheck);
    } else {
      setUserChecked(false);
    }
  }, [data, usernameCheck]);

  return (
    <View style={{position: 'relative'}}>
      <FAppBar
        type="detailBack"
        rightOn={true}
        rType1="detailHeart"
        rType2="detailShare"
        rType3={userChecked ? 'detailReviewMore' : null}
        onPress1={() => {}}
        onPress2={() => {}}
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
                boardId: userReview.boardId,
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
            ? mutate(userReview.boardId, {
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
