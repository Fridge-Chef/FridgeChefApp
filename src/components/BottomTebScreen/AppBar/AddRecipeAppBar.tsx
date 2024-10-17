import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FAppBar from '../../elements/FAppBar';
import {useSelectedCategory} from '../../../store/store';

const AddRecipeAppBar = () => {
  const {setSelectedCategory} = useSelectedCategory();
  return (
    <FAppBar
      type="headerClose"
      titleOn={true}
      title="나만의 레시피 작성"
      onlyBackIcon={true}
      rightOn={true}
      rType1="headerClose"
      onBackPress={() => {
        setSelectedCategory({foodStyle: '', foodType: ''});
      }}
    />
  );
};

export default AddRecipeAppBar;

const styles = StyleSheet.create({});
