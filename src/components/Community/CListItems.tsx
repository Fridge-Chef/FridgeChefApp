import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {FWidth} from '../../../globalStyle';
import CListItem from './CListItem';
import {myRecipes} from '../../utils/list';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ArrowSubTitle from '../elements/SubTitle/ArrowSubTitle';

type CListItemsProps = {
  scrollOffset: number;
  setScrollOffset: (offset: number) => void;
  setPrevScrollOffset: (offset: number) => void;
};

const CListItems = ({
  scrollOffset,
  setScrollOffset,
  setPrevScrollOffset,
}: CListItemsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    setScrollOffset(currentOffset);
    setPrevScrollOffset(scrollOffset);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ArrowSubTitle />
      </View>
      <FlatList
        data={myRecipes}
        overScrollMode="never"
        onScroll={handleScroll}
        contentContainerStyle={{paddingBottom: FWidth * 20}}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CListItem
            item={item}
            onPress={() =>
              navigation.navigate('reviewDetail', {
                item,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default CListItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: FWidth * 22,
  },

  titleContainer: {
    marginBottom: FWidth * 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
