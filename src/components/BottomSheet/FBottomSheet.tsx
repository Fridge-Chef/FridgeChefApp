import {Keyboard, StatusBar, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {
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

const FBottomSheet = () => {
  const {title} = useBottomSheetTitle();
  const {setCategory, setExpiryDate, setItemNumber} = useCategoriesText();
  const snapPoints = useMemo(() => {
    switch (title) {
      case '재료 추가':
      case '조미료 추가':
      case '유통기한 등록':
      case '재료보기':
        return ['100%'];
      case '순위':
        return ['32%'];
      default:
        return ['100%'];
    }
  }, [title]);
  const {setBottomSheetRef} = useBottomSheetRef();
  const bottomRef = useRef<BottomSheet>(null);
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
      case '순위':
        return <Ranking />;
      default:
        break;
    }
  };

  useEffect(() => {
    setBottomSheetRef(bottomRef);
  }, []);

  return (
    <>
      <BottomSheet
        ref={bottomRef}
        snapPoints={snapPoints}
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
        index={-1}
        style={[styles.contentContainer]}>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          {bottomScreen()}
        </BottomSheetScrollView>
      </BottomSheet>
      <FBottomSheetSub />
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
