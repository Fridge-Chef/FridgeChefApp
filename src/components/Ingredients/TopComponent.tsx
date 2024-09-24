import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FHeight, fontStyles, FWidth} from '../../../globalStyle';
import FButton from '../elements/FButton';
import {useBottomSheetRef, useBottomSheetTitle} from '../../store/store';
import SvgImage from '../elements/SvgImage';
import LoginAndUser from './LoginAndUser';
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
      <Text
        style={[
          fontStyles.B_22,
          {color: colors.text},
        ]}>{`냉장고 재료들을\n등록해주세요`}</Text>
      <FButton
        buttonStyle="svgButton"
        radius={50}
        buttonColor={colors.text}
        onPress={handleAddIngredient}>
        <SvgImage type="plus" width={24} height={24} />
      </FButton>
    </View>
  );
};

export default TopComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: FHeight * 32,
    paddingHorizontal: FWidth * 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
