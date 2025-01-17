import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FWidth} from '../../../globalStyle';

import StorageList from '../../components/MyFridge/StorageGuide/StorageList';
import StorageMenu from '../../components/MyFridge/StorageGuide/StorageMenu';
import StorageSubList from '../../components/MyFridge/StorageGuide/StorageSubList';
import StorageSubTipTitle from '../../components/MyFridge/StorageGuide/StorageSubTipTitle';
import StorageTitle from '../../components/MyFridge/StorageGuide/StorageTitle';

const StorageGuide = () => {
  const [isClicked, setIsClicked] = useState(1);

  return (
    <View style={styles.container}>
      <StorageTitle />
      <StorageMenu isClicked={isClicked} setIsClicked={setIsClicked} />
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <StorageList isClicked={isClicked} />
        <StorageSubTipTitle />
        <StorageSubList />
      </ScrollView>
    </View>
  );
};

export default StorageGuide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FWidth * 24,
    paddingHorizontal: FWidth * 22,
  },
});
