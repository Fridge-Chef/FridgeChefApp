import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {colors, FWidth} from '../../../globalStyle';
import ArrowDown2 from '../../utils/Svg/ArrowDown2';
import SubTitleComponent from '../Ingredients/SubTitleComponent';
import CListItem from './CListItem';
import {myRecipes} from '../../utils/list';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
        <SubTitleComponent title="최근순" color={colors.subText} />
        <View style={{marginLeft: FWidth * 4}}>
          <ArrowDown2 />
        </View>
      </View>
      <FlatList
        data={myRecipes}
        overScrollMode="never"
        onScroll={handleScroll}
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
    marginTop: FWidth * 24,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
