import {StyleSheet, View} from 'react-native';
import React from 'react';
import TopTitle from '../TopTitle';
import {colors, FWidth} from '../../../../globalStyle';
import BottomButton from '../BottomButton';
import ItemsComponent from './ItemsComponent';

const IngredientList = () => {
  const list = ['소금', '후추', '설탕', '간장', '고추장', '고추가루'];
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TopTitle title="제외할 재료가 있으신가요?" />
        <ItemsComponent title="보유 조미료" itemList={list} />
        <ItemsComponent title="보유 재료" itemList={list} />
      </View>
      <BottomButton
        title="확인"
        buttonColor={colors.black}
        onPress={() => console.log('확인')}
      />
    </View>
  );
};

export default IngredientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: FWidth * 28,
  },
});
