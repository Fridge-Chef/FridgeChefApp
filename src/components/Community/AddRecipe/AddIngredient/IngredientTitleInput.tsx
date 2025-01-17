import React from 'react';
import {StyleSheet, View} from 'react-native';
import {fontFamilies} from '../../../../../globalStyle';
import FInput from '../../../elements/FInput';

type IngredientTitleInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const IngredientTitleInput = ({
  value,
  onChangeText,
}: IngredientTitleInputProps) => {
  return (
    <View style={styles.container}>
      <FInput
        value={value}
        onChangeText={onChangeText}
        inputStyle="recipe"
        placeholder="재료명"
        fontFamily={fontFamilies.pretendardRegular}
      />
    </View>
  );
};

export default IngredientTitleInput;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
