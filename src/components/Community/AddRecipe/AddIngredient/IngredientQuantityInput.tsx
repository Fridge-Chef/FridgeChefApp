import React from 'react';
import {StyleSheet, View} from 'react-native';
import {fontFamilies, FWidth} from '../../../../../globalStyle';
import FInput from '../../../elements/FInput';

type IngredientQuantityInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const IngredientQuantityInput = ({
  value,
  onChangeText,
}: IngredientQuantityInputProps) => {
  return (
    <View style={styles.container}>
      <FInput
        value={value}
        onChangeText={onChangeText}
        inputStyle="subRecipe"
        placeholder="용량"
        fontFamily={fontFamilies.pretendardRegular}
      />
    </View>
  );
};

export default IngredientQuantityInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: FWidth * 8,
  },
});
