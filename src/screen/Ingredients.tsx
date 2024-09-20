import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {FHeight, FWidth} from '../../globalStyle';

import TopComponent from '../components/Ingredients/TopComponent';
import CondimentList from '../components/Ingredients/CondimentList';
import AddList from '../components/Ingredients/AddList/AddList';
import Loading from '../components/elements/Loading';

const Ingredients = () => {
  return (
    <View style={styles.container}>
      <TopComponent />
      <CondimentList />
      <View style={{flex: 1}}>
        <AddList />
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: FHeight * 16,
    paddingHorizontal: FWidth * 27,
    backgroundColor: 'white',
  },
});
