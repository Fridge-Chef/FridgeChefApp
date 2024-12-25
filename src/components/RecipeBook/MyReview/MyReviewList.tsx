import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ReviewItem from './ReviewItem';
import {MyRecipeReviewsType} from '../../../type/types';
import {colors, FWidth} from '../../../../globalStyle';

type MyReviewListProps = {
  list: MyRecipeReviewsType[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  menuOpen: boolean | number | null;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | number | null>>;
};

const MyReviewList = ({
  list,
  fetchNextPage,
  menuOpen,
  setMenuOpen,
  hasNextPage,
  isFetchingNextPage,
}: MyReviewListProps) => {
  const handleFetchNextPage = () => {
    console.log('마지막');
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <FlatList
      data={list}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      contentContainerStyle={{paddingBottom: FWidth * 60}}
      keyExtractor={item => item.boardId.toString()}
      renderItem={({item}) => (
        <ReviewItem
          review={item}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      )}
      ListFooterComponent={
        isFetchingNextPage ? (
          <ActivityIndicator size="large" color={colors.primary[1]} />
        ) : null
      }
      onEndReached={handleFetchNextPage}
    />
  );
};

export default MyReviewList;

const styles = StyleSheet.create({});
