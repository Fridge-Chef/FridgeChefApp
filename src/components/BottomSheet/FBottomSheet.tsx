import {Keyboard, StatusBar, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {useAddRecipeCategories, useCategoriesText} from '../../store/store';
import {colors, FWidth} from '../../../globalStyle';
import {
  useCommunityMyRecipeName,
  useMyRecipeRankName,
  useMyReviewRankName,
  useRecipeLikeRankName,
} from '../../store/rankingStore';
import {
  bottomScreen,
  handleIndex,
} from '../../service/FBottomSheet/FBottomSheet';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../store/bottomSheetStore';

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
      case '나의레시피디테일':
        return ['10%'];
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
      setExpiryDate('날짜를 선택해 주세요');
      setItemNumber(0);
      setAddTitle({foodStyle: '한식', foodType: ''});
    }
    Keyboard.dismiss();
  }, []);

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
            title === '디테일리뷰옵션' ||
            title === '나의레시피디테일'
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
          index={handleIndex(title)}
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
                title === '디테일리뷰옵션' ||
                title === '나의레시피디테일'
                  ? 0
                  : 1,
            }}>
            {bottomScreen({
              communityRankingId,
              myRankingId,
              myReviewRankingId,
              rankingId,
              setCommunityRankingId,
              setCommunityRankingName,
              setMyRanking,
              setMyRankingId,
              setMyReviewRanking,
              setMyReviewRankingId,
              setRankingId,
              setRankName,
              title,
            })}
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
