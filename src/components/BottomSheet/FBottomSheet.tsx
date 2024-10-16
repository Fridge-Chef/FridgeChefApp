import {Keyboard, LayoutChangeEvent, StatusBar, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {
  useAddRecipeCategories,
  useBottomSheetRef,
  useBottomSheetTitle,
  useCategoriesText,
} from '../../store/store';
import {colors, FWidth} from '../../../globalStyle';
import AddIngredient from './AddIngredient/AddIngredient';
import ExpiryDate from './ExpiryDate/ExpiryDate';
import AddCondiment from './AddCondiment/AddCondiment';
import IngredientList from './IngredientList/IngredientList';
import Management from './ExpiryDate/Management';
import FBottomSheetSub from './BottomSheetSub/FBottomSheetSub';
import Ranking from './Ranking/Ranking';
import DetailReviewOption from './DetailReviewOption/DetailReviewOption';
import {RecipeBookRankingList} from '../../utils/list';
import RecipeRanking from './RecipeBookRanking/RecipeRanking';
import {
  useCommunityMyRecipeName,
  useMyRecipeRankName,
  useMyReviewRankName,
  useRecipeLikeRankName,
} from '../../store/rankingStore';
import AddRecipeCategory from './AddRecipeCategory/AddRecipeCategory';

const FBottomSheet = () => {
  const {title} = useBottomSheetTitle();
  const {setAddTitle} = useAddRecipeCategories();
  const {setRankName, rankingId, setRankingId} = useRecipeLikeRankName();
  const {
    setRankName: setCommunityRankingName,
    rankingId: communityRankingId,
    setRankingId: setCommunityRankingId,
  } = useCommunityMyRecipeName();
  const {
    setRankName: setMyRanking,
    rankingId: myRankingId,
    setRankingId: setMyRankingId,
  } = useMyRecipeRankName();
  const {
    setRankName: setMyReviewRanking,
    rankingId: myReviewRankingId,
    setRankingId: setMyReviewRankingId,
  } = useMyReviewRankName();
  const {setCategory, setExpiryDate, setItemNumber} = useCategoriesText();
  const snapPoints = useMemo(() => {
    switch (title) {
      case '재료 추가':
      case '조미료 추가':
      case '유통기한 등록':
      case '재료보기':
      case '나의레시피등록':
        return ['100%'];
      case '순위':
      case '좋아요 랭킹':
      case '나의레시피':
      case '나만의레시피':
      case '나의후기':
      case '디테일리뷰옵션':
        return ['28%'];
      default:
        return ['100%'];
    }
  }, [title]);
  const {setBottomSheetRef} = useBottomSheetRef();
  const bottomRef = useRef<BottomSheetModal>(null);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const handleChange = useCallback((index: number) => {
    StatusBar.setBackgroundColor(
      index === -1 ? colors.white : colors.black + '65',
    );
    if (index === -1) {
      setCategory('');
      setExpiryDate('');
      setItemNumber(0);
      setAddTitle({foodStyle: '한식', foodType: ''});
    }
    Keyboard.dismiss();
  }, []);

  const bottomScreen = () => {
    switch (title) {
      case '재료 추가':
        return <AddIngredient />;
      case '조미료 추가':
        return <AddCondiment />;
      case '유통기한 등록':
        return <Management />;
      case '재료보기':
        return <IngredientList />;
      case '나의레시피등록':
        return <AddRecipeCategory />;
      case '순위':
        return <Ranking />;
      case '좋아요 랭킹':
        return (
          <RecipeRanking
            setRankName={setRankName}
            rankingId={rankingId}
            setRankingId={setRankingId}
          />
        );
      case '나의레시피':
        return (
          <RecipeRanking
            setRankName={setMyRanking}
            rankingId={myRankingId}
            setRankingId={setMyRankingId}
          />
        );
      case '나만의레시피':
        return (
          <RecipeRanking
            setRankName={setCommunityRankingName}
            rankingId={communityRankingId}
            setRankingId={setCommunityRankingId}
          />
        );
      case '나의후기':
        return (
          <RecipeRanking
            setRankName={setMyReviewRanking}
            rankingId={myReviewRankingId}
            setRankingId={setMyReviewRankingId}
          />
        );
      case '디테일리뷰옵션':
        return <DetailReviewOption />;
      default:
        break;
    }
  };

  const handleIndex = () => {
    if (
      title === '순위' ||
      title === '좋아요 랭킹' ||
      title === '나의레시피' ||
      title === '나만의레시피' ||
      title === '나의후기' ||
      title === '디테일리뷰옵션'
    ) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    setBottomSheetRef(bottomRef);
  }, []);

  return (
    <>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomRef}
          snapPoints={snapPoints}
          enableDynamicSizing={
            title === '순위' ||
            title === '좋아요 랭킹' ||
            title === '나의레시피' ||
            title === '나만의레시피' ||
            title === '나의후기' ||
            title === '디테일리뷰옵션'
              ? true
              : false
          }
          handleStyle={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: FWidth * 36,
            elevation: 0,
          }}
          handleComponent={null}
          onChange={handleChange}
          enablePanDownToClose={true}
          enableContentPanningGesture={true}
          backdropComponent={renderBackdrop}
          backgroundStyle={{
            backgroundColor: colors.white,
          }}
          index={handleIndex()}
          style={[styles.contentContainer]}>
          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow:
                title === '순위' ||
                title === '좋아요 랭킹' ||
                title === '나의레시피' ||
                title === '나만의레시피' ||
                title === '나의후기' ||
                title === '디테일리뷰옵션'
                  ? 0
                  : 1,
            }}>
            {bottomScreen()}
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    borderRadius: 50,
  },
});

export default FBottomSheet;
