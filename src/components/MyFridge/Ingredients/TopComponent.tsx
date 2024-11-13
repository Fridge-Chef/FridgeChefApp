import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, FWidth} from '../../../../globalStyle';
import FButton from '../../elements/FButton';
import FText from '../../elements/FText';
import Plus from '../../../utils/Svg/Plus';
import {
  useBottomSheetRef,
  useBottomSheetTitle,
} from '../../../store/bottomSheetStore';

const TopComponent = () => {
  const {bottomSheetRef} = useBottomSheetRef();
  const [buttonName] = useState('재료 추가');
  const {setTitle} = useBottomSheetTitle();

  const handleAddIngredient = () => {
    setTitle(buttonName);
    bottomSheetRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <View>
        <FText
          fStyle="B_20"
          color={colors.text}
          text="냉장고 재료를 등록하고"
        />
        <FText fStyle="B_20" color={colors.text} text="레시피를 찾아보세요" />
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
