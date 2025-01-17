import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelectedCategory} from '../../../store/store';
import FAppBar from '../../elements/FAppBar';

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
        setSelectedCategory('');
      }}
    />
  );
};

export default AddRecipeAppBar;

const styles = StyleSheet.create({});
