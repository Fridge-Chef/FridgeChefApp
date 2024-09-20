import {View, StyleSheet, Text} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';

import {FHeight} from '../../../globalStyle';
import AddIngredient from './AddIngredient/AddIngredient';
import ExpiryDate from './ExpiryDate/ExpiryDate';

const FBottomSheet = () => {
  const {title} = useBottomSheetTitle();
  const snapPoints = useMemo(() => {
    return ['100%'];
  }, []);
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

  const bottomScreen = () => {
    switch (title) {
      case '재료 추가':
        return <AddIngredient />;
      case '유통기한 등록':
        return <ExpiryDate />;
      default:
        break;
    }
  };

  useEffect(() => {
    setBottomSheetRef(bottomRef);
  }, []);

  return (
    <BottomSheet
      ref={bottomRef}
      snapPoints={snapPoints}
      handleStyle={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: FHeight * 36,
        elevation: 0,
      }}
      enablePanDownToClose={true}
      enableContentPanningGesture={true}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: 'white',
      }}
      index={-1}
      style={[styles.contentContainer]}>
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {bottomScreen()}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    borderRadius: 50,
  },
});

export default FBottomSheet;
