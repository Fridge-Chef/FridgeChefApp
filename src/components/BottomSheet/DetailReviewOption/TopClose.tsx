import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomClose from '../../../utils/Svg/BottomClose';
import FButton from '../../elements/FButton';
import {useBottomSheetRef} from '../../../store/bottomSheetStore';

const TopClose = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  return (
    <View style={styles.container}>
      <FButton
        buttonStyle="noneStyle"
        onPress={() => bottomSheetRef.current?.close()}>
        <BottomClose />
      </FButton>
    </View>
  );
};

export default TopClose;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
});
