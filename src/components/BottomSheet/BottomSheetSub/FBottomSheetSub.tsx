import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Keyboard, StatusBar, StyleSheet} from 'react-native';
import {colors, FWidth} from '../../../../globalStyle';
import {
  useSubBottomSheetRef,
  useSubBottomSheetTitle,
} from '../../../store/bottomSheetStore';
import {} from '../../../store/store';
import SubExpiryDate from './SubExpiryDate';

const FBottomSheetSub = () => {
  const {subTitle} = useSubBottomSheetTitle();
  const {setSubBottomSheetRef} = useSubBottomSheetRef();
  const snapPoints = useMemo(() => {
    return ['45%'];
  }, []);

  const bottomRef1 = useRef<BottomSheetModal>(null);
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
        return null;
    }
  };

  useEffect(() => {
    setSubBottomSheetRef(bottomRef1);
  }, [setSubBottomSheetRef]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomRef1}
        // snapPoints={snapPoints}
        enableDynamicSizing={true}
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
        index={0}
        style={[styles.contentContainer]}>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 0}}>
          {bottomScreen()}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default FBottomSheetSub;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    borderRadius: 50,
  },
});
