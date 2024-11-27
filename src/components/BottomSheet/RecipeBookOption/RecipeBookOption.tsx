import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FWidth} from '../../../../globalStyle';
import TopClose from '../DetailReviewOption/TopClose';
import MenuList from '../DetailReviewOption/MenuList';
import DeleteModal from '../../elements/Modals/DeleteModal';

const RecipeBookOption = () => {
  const [deleteCheck, setDeleteCheck] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <View style={styles.container}>
      <TopClose />
      <MenuList
        updateOnPress={() => {
          console.log('수정');
        }}
        deleteOnPress={() => {
          setDeleteModal(true);
        }}
      />
      <DeleteModal
        modalCheck={deleteModal}
        deleteCheck={deleteCheck}
        onPress={() => {}}
        cancelOnPress={() => setDeleteModal(false)}
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
