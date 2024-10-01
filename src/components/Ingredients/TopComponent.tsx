import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import FText from '../elements/FText';
import Plus from '../../utils/Svg/Plus';
import Config from 'react-native-config';

const TopComponent = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const [buttonName] = useState('재료 추가');
  const {setTitle} = useBottomSheetTitle();

  const handleAddIngredient = () => {
    setTitle(buttonName);
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <View>
        <FText fStyle="B_22" color={colors.text} text="냉정고 속 재료를" />
        <FText fStyle="B_22" color={colors.text} text="등록해주세요" />
      </View>
      <FButton
        buttonStyle="svgButton"
        radius={50}
        buttonColor={colors.text}
        onPress={handleAddIngredient}>
        <Plus />
      </FButton>
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FWidth * 32,
    paddingHorizontal: FWidth * 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
