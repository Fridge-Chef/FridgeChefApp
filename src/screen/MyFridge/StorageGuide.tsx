import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';

import StorageTitle from '../../components/MyFridge/StorageGuide/StorageTitle';
import FButton from '../../components/elements/FButton';
import FText from '../../components/elements/FText';
import StorageMenu from '../../components/MyFridge/StorageGuide/StorageMenu';
import StorageList from '../../components/MyFridge/StorageGuide/StorageList';
import StorageSubTipTitle from '../../components/MyFridge/StorageGuide/StorageSubTipTitle';
import StorageSubList from '../../components/MyFridge/StorageGuide/StorageSubList';

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
