import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopLine from '../components/Nickname/TopLine';
import {colors, FWidth} from '../../globalStyle';
import BasicIngredients from '../components/AddBasic/BasicIngredients';
import BasicTopTitle from '../components/AddBasic/BasicTopTitle';
import SubmitButtons from '../components/AddBasic/SubmitButtons';

const AddBasic = () => {
  const [basicItem, setBasicItem] = useState({
    items: ['계란', '김치', '케찹', '라면', '밥(햇반)', '소금', '설탕', '간장'],
  });

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
