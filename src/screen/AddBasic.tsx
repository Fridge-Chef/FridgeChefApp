import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TopLine from '../components/Nickname/TopLine';
import {colors, FWidth} from '../../globalStyle';
import BasicIngredients from '../components/AddBasic/BasicIngredients';
import BasicTopTitle from '../components/AddBasic/BasicTopTitle';
import SubmitButtons from '../components/AddBasic/SubmitButtons';

const AddBasic = () => {
  const [basicItem, setBasicItem] = useState([
    {ingredientName: '계란', storage: 'REFRIGERATION'},
    {ingredientName: '김치', storage: 'REFRIGERATION'},
    {ingredientName: '케찹', storage: 'REFRIGERATION'},
    {ingredientName: '라면', storage: 'TEMPERATURE'},
    {ingredientName: '밥(햇반)', storage: 'TEMPERATURE'},
    {ingredientName: '소금', storage: 'TEMPERATURE'},
    {ingredientName: '설탕', storage: 'TEMPERATURE'},
    {ingredientName: '간장', storage: 'TEMPERATURE'},
  ]);

  return (
    <View style={styles.container}>
      <TopLine colorWidth={'100%'} />
      <View style={styles.paddingContainer}>
        <BasicTopTitle />
        <BasicIngredients
          initialItems={basicItem}
          setBasicItem={setBasicItem}
        />
        <SubmitButtons basicItem={basicItem} />
      </View>
    </View>
  );
};

export default AddBasic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  paddingContainer: {
    paddingHorizontal: FWidth * 22,
  },
});
