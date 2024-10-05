import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FInput from '../../../elements/FInput';
import {fontFamilies, FWidth} from '../../../../../globalStyle';

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
