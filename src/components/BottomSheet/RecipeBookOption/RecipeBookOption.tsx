import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FWidth} from '../../../../globalStyle';
import TopClose from '../DetailReviewOption/TopClose';
import MenuList from '../DetailReviewOption/MenuList';
import DeleteModal from '../../elements/Modals/DeleteModal';
import {useRecipeId} from '../../../store/store';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useBottomSheetRef} from '../../../store/bottomSheetStore';
import {
  useDeleteMyRecipe,
  useGetRecipeBookList,
} from '../../../api/recipeBookQuery';
import {useGetRecipeList} from '../../../api/recipeQuery';

const RecipeBookOption = () => {
  const [deleteCheck, setDeleteCheck] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {bottomSheetRef} = useBottomSheetRef();
  const {refetch} = useGetRecipeBookList('MYRECIPE');
  const {recipeId} = useRecipeId();
  const {mutate} = useDeleteMyRecipe();
  const {refetch: myRecipeList} = useGetRecipeList();
  const handleClose = () => {
    setDeleteModal(false);
    myRecipeList();
    refetch();
    bottomSheetRef.current?.close();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TopClose />
      <MenuList
        updateOnPress={() => {
          bottomSheetRef.current?.close(),
            navigation.navigate('addRecipe', {
              boardId: recipeId,
              type: 'update',
            });
        }}
        deleteOnPress={() => {
          setDeleteModal(true);
        }}
      />
      <DeleteModal
        modalCheck={deleteModal}
        deleteCheck={deleteCheck}
        onPress={() =>
          deleteCheck
            ? mutate(recipeId, {
                onSuccess: () => {
                  setDeleteCheck(false);
                },
              })
            : handleClose()
        }
        cancelOnPress={() => {
          setDeleteModal(false);
          bottomSheetRef.current?.close();
        }}
      />
    </View>
  );
};

export default RecipeBookOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: FWidth * 22,
    paddingTop: FWidth * 16,
  },
});
