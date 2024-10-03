import {Keyboard, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {BottomSheetBackdrop, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import {colors, FWidth} from '../../../../globalStyle';
import {
  useSubBottomSheetRef,
  useSubBottomSheetTitle,
} from '../../../store/store';
import SubExpiryDate from './SubExpiryDate';

const FBottomSheetSub = () => {
  const {subTitle} = useSubBottomSheetTitle();
  const {setSubBottomSheetRef} = useSubBottomSheetRef();
  const snapPoints = useMemo(() => {
    return ['45%'];
  }, []);

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
    StatusBar.setBackgroundColor(colors.black + '65');
    Keyboard.dismiss();
  }, []);

  const bottomScreen = () => {
    switch (subTitle) {
      case '유통기한':
        return <SubExpiryDate />;
      default:
        break;
    }
  };

  useEffect(() => {
    setSubBottomSheetRef(bottomRef);
  }, []);

  return (
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
  );
};

export default FBottomSheetSub;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    borderRadius: 50,
  },
});
